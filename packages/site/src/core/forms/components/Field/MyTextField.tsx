import React from 'react';
import { TextField } from '@instant1100/ui-kit';
import { FieldProps } from '../../interfaces/interfaces';

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
