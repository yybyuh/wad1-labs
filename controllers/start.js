'use strict';

import logger from "../utils/logger.js";

const start = {
    createView(request, response){
        logger.info("start page laoding")
        response.send('Welcome to the playlist app!')
    }
}

export default start