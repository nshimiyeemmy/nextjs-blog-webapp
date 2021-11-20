//now it's time to fetch data from sanity

import sanityClient from './sanity';

//function to fetch data from sanity
export async function getBlogs(){
   const results = await sanityClient.fetch(`*[_type == "blog"]{title, subtitle, slug}`);
   return results;
}
