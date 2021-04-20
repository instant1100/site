import TextField from '@material-ui/core/TextField';
import React from 'react';
import { FieldProps } from '/core/forms/interfaces';

const MyTextField = ({
  value, name, label, handleChange, required,
}: FieldProps) => {
  return (
    <TextField
      required={required}
      name={name}
      label={label}
      onChange={handleChange}
      value={value}
      fullWidth
    />
  );
};

export default MyTextField;
