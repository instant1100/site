import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectFieldProps } from '../../interfaces/interfaces';

const MySelectField = ({
  value, name, label, handleChange, values,
}: SelectFieldProps) => {
  const [open, setOpen] = React.useState(false);

  const onChange = (event: any) => {
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
        renderValue={(selected: any) => (
          <div>
            {selected.map((select: any) => {
              const chipValue: any = values.find((i: any) => i.value === select);

              return (
                <Chip
                  key={select}
                  label={chipValue.label}
                />
              );
            })}
          </div>
        )}
      >
        {values.map((variant: any) => (
          <MenuItem key={variant.value} value={variant.value}>
            {variant.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default MySelectField;
