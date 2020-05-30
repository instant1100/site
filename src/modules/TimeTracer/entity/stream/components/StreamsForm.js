import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from 'react-router';
import byId from '@/utils/byId';
import {Formik} from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import ImageLoader from '@/components/_utils/ImageLoader/ImageLoader';
import useSafeEntity from '@/modules/TimeTracer/entity/_common/useSafeEntity';
import {STREAM_ENTITY, TAG_ENTITY} from '@/modules/TimeTracer/entity/entityMap';
import useDB from '@/core/AppDB/hooks/useDB';
import {saveEntity} from '@/core/AppDB/MethodsDB';

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

const StreamsForm = () => {
  const classes = useStyles();

  const {t} = useTranslation();
  let { id } = useParams();
  const tags = useDB(TAG_ENTITY);
  const currentStreamEntity = useSafeEntity(STREAM_ENTITY, id);

  const submit = useCallback((values) => {
    return saveEntity(STREAM_ENTITY, id, values);
  }, [id]);

  return (
    <Formik
      initialValues={currentStreamEntity}
      enableReinitialize={true}

      onSubmit={(values) => {
        submit(values);
      }}
    >
      {({
          values,
          handleChange,
          setFieldValue,
          handleSubmit
        }) => {

        return <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
          <Typography variant="h6" gutterBottom>
            {id ? t('time_tracing/edit_stream') : t('time_tracing/new_stream')}
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              required
              id="name"
              label={t('time_tracing/stream_name')}
              fullWidth
              onChange={handleChange}
              value={values.name}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="size"
              label={t('time_tracing/stream_size')}
              fullWidth
              onChange={handleChange}
              value={values.size}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label"> {t('time_tracing/choose_tag')}</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              name="tags"
              value={values.tags}
              onChange={handleChange}
              input={<Input
                id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={tags.find(byId(value))['name']} className={classes.chip} />
                  ))}
                </div>
              )}
            >
              {tags.map(({name, id}) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <ImageLoader setFieldValue={setFieldValue} name="icon" />

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

export default StreamsForm;