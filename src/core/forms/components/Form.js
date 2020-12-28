import React, { useContext } from 'react';
import FirebaseContext from '@/core/FirebaseProvider/FirebaseContext';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { FIELD_IMAGE, getDefaultEntity } from '@/core/forms/types';

const Form = (
  {
    entityConfig,
    ViewComponent,
  },
) => {
  const firebase = useContext(FirebaseContext);

  const submit = async (values) => {
    const valuesForDB = Object.keys(values)
      .filter((key) => entityConfig.find((field) => field.name === key).type !== FIELD_IMAGE)
      .reduce((map, key) => {
        // eslint-disable-next-line no-param-reassign
        map[key] = values[key];

        return map;
      }, {});

    const db = firebase.firestore();
    const docRef = await db.collection('armlists').add(valuesForDB);

    const { id } = docRef;

    const loadsFile = entityConfig
      .filter((field) => field.type === FIELD_IMAGE)
      .filter((field) => values[field.name])
      .map((field) => {
        const { name } = field;
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const spaceRef = storageRef.child(`images/armlist/${name}_${id}.jpg`);

        return spaceRef.put(values[field.name]);
      });

    return Promise.all(loadsFile);
  };

  const { t } = useTranslation();
  const currentStreamEntity = getDefaultEntity(entityConfig);
  const config = entityConfig.map((item) => ({ ...item, label: t(item.name) }));

  return (
    <Formik
      initialValues={currentStreamEntity}
      enableReinitialize

      onSubmit={(values) => {
        submit(values);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
      }) => (
        <ViewComponent
          values={values}
          config={config}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          title=""
        />
      )}
    </Formik>
  );
};

export default Form;
