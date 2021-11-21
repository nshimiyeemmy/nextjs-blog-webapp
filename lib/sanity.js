
import sanityClient from "@sanity/client";

//defining options Object for sanityClient
const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId:process.env.SANITY_PROJECT_ID,
    
    /* this will depend on our environment(production); If useCDN===true, gives you fast response,but it will give you cached data
    but if useCdn===false, gives you little bit slower response but latest data */ 
    useCdn:process.env.NODE_ENV === 'production'
}

export default sanityClient(options);  //now you can use SanityClient to fetch our data from sanity
