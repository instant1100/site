import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import { Formik } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import { WORD_ENTITY } from '@/modules/TimeTracer/entity/entityMap';
import useSafeEntity from '@/modules/TimeTracer/entity/_common/useSafeEntity';
import { saveEntity } from '/core/AppDB/MethodsDB';

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

const WordsForm = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { id } = useParams() as any;
  const currentWordEntity = useSafeEntity(WORD_ENTITY, id);

  const submit = useCallback((values) => saveEntity(WORD_ENTITY, id, values), [id]);

  return (
    <Formik
      initialValues={currentWordEntity}
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
            {id ? t('time_tracing/edit_word') : t('time_tracing/new_word')}
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              required
              id="word"
              label={t('time_tracing/word')}
              fullWidth
              onChange={handleChange}
              value={values.word}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              required
              id="translate"
              label={t('time_tracing/translate')}
              fullWidth
              onChange={handleChange}
              value={values.translate}
            />
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

export default WordsForm;
