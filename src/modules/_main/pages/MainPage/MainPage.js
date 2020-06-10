import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from '../../../../ui-kit/widgets/FeaturedPost/FeaturedPost';
import Sidebar from '../../../../temp/Sidebar';
import PostList from '@/ui-kit/widgets/PostList/PostList';
import MainFeaturedPost from '@/ui-kit/widgets/MainFeaturedPost/MainFeaturedPost';
import featurePost from '@/db/featurePosts/featurePost';
import sidebarData from '@/db/sidebarData';
import dailyPosts from '@/db/daylyPosts/daylyPosts';
import featuredPosts from '@/db/featurePosts/featuredPosts';
import PageLayout from '@/modules/_main/components/PageLayout/PageLayout';

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
