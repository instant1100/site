import React from 'react';
import Form from '/core/forms/components/Form';
import DefaultFormView from '/core/forms/components/DefaultFormView';
import armListEntity from '../core/armlistEntity';

const ArmListForm = () => {
  return (
    <Form
      formConfig={armListEntity}
      ViewComponent={DefaultFormView}
    />
  );
};

export default ArmListForm;
