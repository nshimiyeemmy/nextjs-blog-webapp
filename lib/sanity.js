
//defining options Object for sanityClient
const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId:process.env.SANITY_PROJECT_ID,
    
    /* this will depend on our environment(prodction); If useCDN===true, gives you fast response,but it will give you cached data
    but if useCDN===false, gives you little bit slower response but latest data */ 
    useCDN:process.env.NODE_ENV === 'production'
}

export default SanityClient(options);  //now you can use SanityClient to fetch our data from sanity
