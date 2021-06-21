import React from 'react';
import {
  Grid, makeStyles, Card, CardMedia, Typography, CardContent,
} from '@instant1100/ui-kit';

import { useDB } from '@instant1100/store';
import { ENTITIES_LIST } from '../entity/entityMap';
import { StreamEntity } from '../entity/entities/streamEntity';

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
  const streams = useDB<StreamEntity>(ENTITIES_LIST.STREAM);
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" spacing={3}>
        {streams.map((stream: StreamEntity) => {
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
