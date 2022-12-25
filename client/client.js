import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.PORTFOLIO_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-12-24',
  useCdn: true,
  token: process.env.PORTFOLIO_SANITY_TK
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
