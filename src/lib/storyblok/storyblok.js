import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_PREVIEW_KEY,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
});

export default Storyblok;
