import React from 'react';

import { makeStyles, Grid } from '@instant1100/ui-kit';

import PostList from '@instant1100/ui-kit/src/widgets/PostList/PostList';
import MainFeaturedPost from '@instant1100/ui-kit/src/widgets/MainFeaturedPost/MainFeaturedPost';
import FeaturedPost from '@instant1100/ui-kit/src/widgets/FeaturedPost/FeaturedPost';

import featurePost from '../../../../db/featurePosts/featurePost';
import sidebarData from '../../../../db/sidebarData';
import dailyPosts from '../../../../db/daylyPosts/daylyPosts';
import featuredPosts from '../../../../db/featurePosts/featuredPosts';
import PageLayout from '../../components/PageLayout/PageLayout';
import Sidebar from '../../../../temp/Sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <PageLayout>
      <MainFeaturedPost post={featurePost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <PostList title="From the firehose" posts={dailyPosts} />
        <Sidebar
          title={sidebarData.title}
          description={sidebarData.description}
          archives={sidebarData.archives}
          social={sidebarData.social}
        />
      </Grid>
    </PageLayout>

  );
};

export default MainPage;
