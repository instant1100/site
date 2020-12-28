import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

const MySelectField = ({
  value, name, label, handleChange, values,
}) => {
  const [open, setOpen] = React.useState(false);

  const onChange = (event) => {
    handleChange(event);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <InputLabel>
        {' '}
        {label}
      </InputLabel>
      <Select
        name={name}
        value={value === undefined ? [] : value}
        multiple
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        onChange={onChange}
        input={(
          <Input />
        )}
        renderValue={(selected) => (
          <div>
            {selected.map((select) => (
              <Chip
                key={select}
                label={values.find((i) => i.value === select).label}
              />
            ))}
          </div>
        )}
      >
        {values.map((variant) => (
          <MenuItem key={variant.value} value={variant.value}>
            {variant.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default MySelectField;
