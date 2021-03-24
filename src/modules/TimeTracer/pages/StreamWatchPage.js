import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import useDB from '@/core/AppDB/hooks/useDB';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import { STREAM_ENTITY } from '$TimeTracer/entity/entityMap';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: 250,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

const StreamWatchPage = () => {
  const streams = useDB(STREAM_ENTITY);
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" spacing={3}>
        {streams.map((stream) => {
          return (
            <Grid key={stream.id} item md={12}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={stream.icon}
                  title={stream.name}
                />
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {stream.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default StreamWatchPage;
