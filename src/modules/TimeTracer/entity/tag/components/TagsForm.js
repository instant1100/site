import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from 'react-router';
import {Formik} from 'formik';
import useSafeEntity from '@/modules/TimeTracer/entity/_common/useSafeEntity';
import {TAG_ENTITY} from '@/modules/TimeTracer/entity/entityMap';
import {saveEntity} from '@/core/AppDB/MethodsDB';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
    },
}));

const TagsForm = () => {
    const classes = useStyles();

    const {t} = useTranslation();
    let { id } = useParams();
    const currentTagEntity = useSafeEntity(TAG_ENTITY, id);

    const submit = useCallback((values) => {
        return saveEntity(TAG_ENTITY, id, values);
    }, []);

    return (
      <Formik
        initialValues={currentTagEntity}
        enableReinitialize={true}

        onSubmit={(values) => {
            submit(values);
        }}
      >
          {({
                values,
                handleChange,
                handleSubmit
            }) => (
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Typography variant="h6" gutterBottom>
                    {id ? t('time_tracing/edit_tag') : t('time_tracing/new_tag')}
                </Typography>
                <TextField
                  required
                  id="name"
                  label={t('time_tracing/tag_name')}
                  fullWidth
                  onChange={handleChange}
                  value={values.name}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.button}
                >
                    {t('form/save')}
                </Button>
            </form>
          )}
      </Formik>
    )
};

export default TagsForm;