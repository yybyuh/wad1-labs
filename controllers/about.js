'use strict';

import logger from "../utils/logger.js";

const about = {
    createView(request, response){
        logger.info("About page laoding")
        response.send('about the playlist app')
    }
}

export default about