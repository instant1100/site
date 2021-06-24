import React from 'react';
import { Form, DefaultFormView } from '@instant1100/forms';

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
