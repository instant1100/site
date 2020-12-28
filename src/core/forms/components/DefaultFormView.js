import React from 'react';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import {
  FIELD_ID, FIELD_IMAGE, FIELD_SELECT, FIELD_TEXT,
} from '@/core/forms/types';
import MyTextField from '@/core/forms/components/Field/MyTextField';
import MySelectField from '@/core/forms/components/Field/MySelectField';
import MyFileField from '@/core/forms/components/Field/MyFileField';

const ComponentMap = {
  [FIELD_ID]: null,
  [FIELD_TEXT]: MyTextField,
  [FIELD_SELECT]: MySelectField,
  [FIELD_IMAGE]: MyFileField,
};

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  form: {
    flexDirection: 'column',
    display: 'flex',
  },
}));

const DefaultFormView = ({
  config, handleChange, title, values, handleSubmit,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
      <Typography variant="h6" gutterBottom>
        {values.id ? title.edit : title.new}
      </Typography>
      {config.map((field, index) => {
        const ComponentAdapter = ComponentMap[field.type];

        const fieldProps = {};
        fieldProps.handleChange = handleChange;
        fieldProps.value = values[field.name];
        fieldProps.name = field.name;
        fieldProps.label = field.label;
        fieldProps.required = field.required;
        fieldProps.values = field.values && field.values.map((select) => ({
          value: select,
          label: select,
        }));

        if (!ComponentAdapter) {
          return null;
        }

        return (
          <FormControl key={index} className={classes.formControl}>
            <ComponentAdapter
              {...fieldProps}
            />
          </FormControl>
        );
      })}

      <FormControl className={classes.formControl}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          {t('form/save')}
        </Button>
      </FormControl>
    </form>
  );
};

export default DefaultFormView;
