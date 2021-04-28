import React, { FC, useContext } from 'react';
import { Formik } from 'formik';

import { getDefaultEntity } from '/core/forms/types';
import { FormProps, ValueMap } from '/core/forms/interfaces/interfaces';
import { FirebaseContext } from '/core/FirebaseProvider/FirebaseProvider';
import { AbstractEntity } from '/core/AppDB/interfaces';
import { FIELD_TYPES } from '/core/forms/interfaces/fields';

const Form: FC<FormProps<AbstractEntity>> = (
  {
    entityConfig,
    ViewComponent,
    handleSubmit,
  },
) => {
  const firebase = useContext(FirebaseContext);

  const submit = async (values: {[key: string]: any}) => {
    const valuesForDB = Object.keys(values)
      .filter((key) => entityConfig.fields.find((field) => field.name === key).type !== FIELD_TYPES.IMAGE)
      .reduce((map: ValueMap, key) => {
        // eslint-disable-next-line no-param-reassign
        map[key] = values[key];

        return map;
      }, {});

    // @ts-ignore
    const db = firebase.firestore();
    const docRef = await db.collection('armlists').add(valuesForDB);

    const { id } = docRef;

    const loadsFile = entityConfig.fields
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

  const initialValues = getDefaultEntity(entityConfig);

  return (
    <Formik
      initialValues={initialValues}
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
          entityConfig={entityConfig}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </Formik>
  );
};

export default Form;
