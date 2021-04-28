import React from 'react';
import Form from '/core/forms/components/Form';
import DefaultFormView from '/core/forms/components/DefaultFormView/DefaultFormView';
import armListEntity from '../core/armlistEntity';

const ArmListForm = () => {
  return (
    <Form
      entityConfig={armListEntity}
      handleSubmit={() => Promise.resolve(true)}
      ViewComponent={DefaultFormView}
    />
  );
};

export default ArmListForm;
