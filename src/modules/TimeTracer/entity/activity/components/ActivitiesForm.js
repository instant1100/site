import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import byId from '@/utils/byId';
import { Formik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { ACTIVITY_ENTITY, STREAM_ENTITY } from '@/modules/TimeTracer/entity/entityMap';
import useSafeEntity from '@/modules/TimeTracer/entity/_common/useSafeEntity';
import useDB from '@/core/AppDB/hooks/useDB';
import { saveEntity } from '@/core/AppDB/MethodsDB';

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

const ActivitiesForm = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { id } = useParams();
  const streams = useDB(STREAM_ENTITY);
  const currentActivityEntity = useSafeEntity(ACTIVITY_ENTITY, id);


  const submit = useCallback((values) => saveEntity(ACTIVITY_ENTITY, id, values), [id]);

  return (
    <Formik
      initialValues={currentActivityEntity}
      enableReinitialize

      onSubmit={(values) => {
        submit(values);
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
          <Typography variant="h6" gutterBottom>
            {id ? t('time_tracing/edit_activity') : t('time_tracing/new_activity')}
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              required
              id="value"
              label={t('time_tracing/activity_value')}
              fullWidth
              onChange={handleChange}
              value={values.value}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label">
              {' '}
              {t('time_tracing/choose_stream')}
            </InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              name="streams"
              value={values.streams}
              onChange={handleChange}
              input={(
                <Input
                  id="select-multiple-chip"
                />
)}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={streams.find(byId(value)).name}
                      className={classes.chip}
                    />
                  ))}
                </div>
              )}
            >
              {streams.map(({ name, id: streamsId }) => (
                <MenuItem key={streamsId} value={streamsId}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
      )}
    </Formik>
  );
};

export default ActivitiesForm;
