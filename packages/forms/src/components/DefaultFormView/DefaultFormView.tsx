import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, FormControl, Typography } from '@instant1100/ui-kit';

import MyTextField from '../Field/MyTextField';
import MySelectField from '../Field/MySelectField';
import MyFileField from '../Field/MyFileField';
import { FIELD_TYPES } from '../../interfaces/fields';
import { DefaultFormViewProps } from './interfaces';
import { useStyles } from './styles';

const ComponentMap: any = {
  [FIELD_TYPES.ID]: null,
  [FIELD_TYPES.TEXT]: MyTextField,
  [FIELD_TYPES.SELECT]: MySelectField,
  [FIELD_TYPES.IMAGE]: MyFileField,
};

const DefaultFormView: FC<DefaultFormViewProps> = (
  {
    handleChange,
    values,
    handleSubmit,
    entityConfig,
  },
) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const formTitle = values.id ? entityConfig.titles.edit : entityConfig.titles.new;
  const { fields } = entityConfig;

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
      <Typography variant="h6" gutterBottom>
        {t(formTitle)}
      </Typography>
      {fields.map((field: any, index) => {
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
