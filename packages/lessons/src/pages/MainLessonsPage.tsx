import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useRouteMatch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const MainLessonsPage = () => {
  const { t } = useTranslation();
  const { url: baseUrl } = useRouteMatch();

  const lessonsList = [{
    key: 'for_in_for',
  }].map((item) => ({
    ...item,
    title: t(`lessons/${item.key}`),
  }));

  return (
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Paper>
            <List component="nav">
              <Divider />
              {lessonsList.map((lesson) => (
                <Link to={`${baseUrl}/${lesson.key}`} key={lesson.key}>
                  <ListItem button key={lesson.key}>
                    <ListItemText primary={lesson.title} />
                  </ListItem>
                  <Divider />
                </Link>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
  );
};

export default MainLessonsPage;
