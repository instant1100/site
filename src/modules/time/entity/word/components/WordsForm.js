import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from 'react-router';
import {saveEntity, useDB} from '@/core/DBContext';
import byId from '@/utils/byId';
import {Formik} from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import createActivityEntity from '@/modules/time/entity/activity/createActivityEntity';
import entityMap, {WORD_ENTITY} from '@/modules/time/entity/entityMap';
import useSafeEntity from '@/modules/time/entity/_common/useSafeEntity';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
  },
  form: {
    flexDirection: 'column',
    display: 'flex'
  },
}));

const WordsForm = () => {
  const classes = useStyles();

  const {t} = useTranslation();
  let { id } = useParams();
  const currentWordEntity = useSafeEntity(WORD_ENTITY, id);

  const submit = useCallback((values) => {
    return saveEntity(WORD_ENTITY, id, values);
  }, [id]);

  return (
    <Formik
      initialValues={currentWordEntity}
      enableReinitialize={true}

      onSubmit={(values) => {
        submit(values);
      }}
    >
      {({
          values,
          handleChange,
          handleSubmit
        }) => {

        return <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
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
      }}
    </Formik>
  )
};

export default WordsForm;
