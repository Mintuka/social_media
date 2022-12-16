import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.PROJECT_ID || 'ausub02f',
  dataset: 'production',
  apiVersion: '2022-12-14',
  useCdn: true,
  token: process.env.SANITY_TOKEN || 'skIBOQkLkUNheRCTmNMocSp8PhMOF31Mo0RcSFz3hWJ2uY3cOpZKmmwUgjeeegq5QnrnabTXKIYtvD2L8f1W35sna9LiSGUnvYFNNIaK0AOOdZBWP4y19tddKKqvm9FSkJFCRWGUDSJWRWsva9BoCTOu2MaHlBrYSTX89kDzTSZGtff213Wr',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);