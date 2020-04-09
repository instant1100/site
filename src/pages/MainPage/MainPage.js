import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from '../../ui-kit/widgets/FeaturedPost/FeaturedPost';
import Sidebar from '../../temp/Sidebar';
import PostList from '@/ui-kit/widgets/PostList/PostList';
import HeaderDefault from '@/components/Header/HeaderDefault';
import HeaderMenu from '@/ui-kit/Headers/HeaderMenu';
import Footer from '@/temp/Footer';
import {useTranslation} from 'react-i18next';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';

import mainMenuData from '@/db/mainMenuData';
import MainFeaturedPost from '@/ui-kit/widgets/MainFeaturedPost/MainFeaturedPost';
import mainFeaturedPostData from '@/db/mainFeaturedPostData';
import featuredPostsData from '@/db/featuredPostsData';
import sidebarData from '@/db/sidebarData';
import posts from '@/db/post/posts';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const menuTranslated = mainMenuData.map(item => ({...item, title: t(item.title)}));

  return (
    <>
      <Container maxWidth="lg">
        <HeaderDefault title={t('step by step')} />
        <HeaderMenu sections={menuTranslated} component={Link}/>
        <main>
          <MainFeaturedPost post={mainFeaturedPostData} />
          <Grid container spacing={4}>
            {featuredPostsData.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <PostList title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebarData.title}
              description={sidebarData.description}
              archives={sidebarData.archives}
              social={sidebarData.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </>
  );
};

export default MainPage;
