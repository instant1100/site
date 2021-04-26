import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from '@/ui-kit/Markdown/Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

type PostListProps = {
  posts: string[],
  title: string
};

const PostList: FC<PostListProps> = ({ posts, title }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((text: string) => (
        <Markdown className={classes.markdown} key={text.substring(0, 40)}>
          {text}
        </Markdown>
      ))}
    </Grid>
  );
};

PostList.defaultProps = {
  title: '',
  posts: [],
};

export default PostList;
