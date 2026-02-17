'use strict';

import logger from "../utils/logger.js";
import lab from '../models/lab.js'

const about = {
   /*  createView(request, response){
        logger.info("About page laoding")
        response.send('about the playlist app')
    } */
   createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About the Playlist App",
      info: lab.getAppInfo()
    };
    
    //logger.debug(viewData);
    response.render('about', viewData);   
  },
}

export default about