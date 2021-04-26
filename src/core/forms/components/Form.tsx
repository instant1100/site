import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import { getDefaultEntity } from '/core/forms/types';
import { FIELD_TYPES, FormProps, ValueMap } from '/core/forms/interfaces';
import { FirebaseContext } from '/core/FirebaseProvider/FirebaseProvider';

const Form: FC<FormProps> = (
  {
    formConfig,
    ViewComponent,
  },
) => {
  const firebase = useContext(FirebaseContext);

  const submit = async (values: {[key: string]: any}) => {
    const valuesForDB = Object.keys(values)
      .filter((key) => formConfig.find((field) => field.name === key).type !== FIELD_TYPES.IMAGE)
      .reduce((map: ValueMap, key) => {
        // eslint-disable-next-line no-param-reassign
        map[key] = values[key];

        return map;
      }, {});

    // @ts-ignore
    const db = firebase.firestore();
    const docRef = await db.collection('armlists').add(valuesForDB);

    const { id } = docRef;

    const loadsFile = formConfig
      .filter((field) => field.type === FIELD_TYPES.IMAGE)
      .filter((field) => values[field.name])
      .map((field) => {
        const { name } = field;
        // @ts-ignore
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const spaceRef = storageRef.child(`images/armlist/${name}_${id}.jpg`);

        return spaceRef.put(values[field.name]);
      });

    return Promise.all(loadsFile);
  };

  const { t } = useTranslation();
  const currentStreamEntity = getDefaultEntity(formConfig);
  const config = formConfig.map((item: any) => ({ ...item, label: t(item.name) }));

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
