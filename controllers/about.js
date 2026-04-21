'use strict';

import logger from "../utils/logger.js";
import lab from '../models/lab.js'
import empStore from "../models/emp-store.js";
import accounts from './accounts.js';

const about = {
   /*  createView(request, response){
        logger.info("About page laoding")
        response.send('about the playlist app')
    } */
   createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");
    
    if (loggedInUser) {
      const viewData = {
        title: 'About the Playlist App',
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        employees: empStore.getEmployees(),
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
},
}

export default about