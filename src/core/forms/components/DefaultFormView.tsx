import React, { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import MyTextField from '/core/forms/components/Field/MyTextField';
import MySelectField from '/core/forms/components/Field/MySelectField';
import MyFileField from '/core/forms/components/Field/MyFileField';
import { DefaultFormViewProps, FIELD_TYPES } from '/core/forms/interfaces';

const ComponentMap: any = {
  [FIELD_TYPES.ID]: null,
  [FIELD_TYPES.TEXT]: MyTextField,
  [FIELD_TYPES.SELECT]: MySelectField,
  [FIELD_TYPES.IMAGE]: MyFileField,
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

const DefaultFormView: FC<DefaultFormViewProps> = (
  {
    config,
    handleChange,
    title,
    values,
    handleSubmit,
  },
) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
      <Typography variant="h6" gutterBottom>
        {values.id ? title.edit : title.new}
      </Typography>
      {config.map((field: any, index) => {
        const ComponentAdapter = ComponentMap[field.type];

        const fieldProps: any = {};
        fieldProps.handleChange = handleChange;
        fieldProps.value = values[field.name];
        fieldProps.name = field.name;
        fieldProps.label = field.label;
        fieldProps.required = field.required;
        fieldProps.values = field.values && field.values.map((select: any) => ({
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
