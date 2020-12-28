import TextField from '@material-ui/core/TextField';
import React from 'react';

const MyTextField = ({
  value, name, label, handleChange, required,
}) => {
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
