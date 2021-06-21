import React from 'react';

import {
  Paper, List, Divider, ListItem, ListItemText, Grid,
} from '@instant1100/ui-kit';

import { useTranslation } from 'react-i18next';
import { Link, useRouteMatch } from 'react-router-dom';
import PageLayout from '../../_main/components/PageLayout/PageLayout';

const MainJestPage = () => {
  const { t } = useTranslation();
  const { url: baseUrl } = useRouteMatch();

  const lessonsList = [{
    key: 'for_in_for',
  }].map((item) => ({
    ...item,
    title: t(`lessons/${item.key}`),
  }));

  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default MainJestPage;
