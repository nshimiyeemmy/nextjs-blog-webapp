//now it's time to fetch data from sanity

import sanityClient from './sanity';

//variable to reference all projections we want to display for our blogs
const blogFields = `
title,
subtitle,
slug
`

//function to fetch data from sanity
export async function getBlogs(){
   const results = await sanityClient.fetch(`*[_type == "blog"]{ ${blogFields}}`);
   return results;
}
