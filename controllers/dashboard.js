'use strict'

import logger from "../utils/logger.js";

const playlist = [
    {
        id: 1,
        title: "piano sonata no.3",
        artist: "beethoven",
    },
    {
        id: 3,
        title: "piano sonata no.7",
        artist: "beethoven",
    },
    {
        id: 3,
        title: "piano sonata no.10",
        artist: "beethoven",
    },
]

const dashboard = {
    createView(request, response){
        logger.info("Dashboard page loading")
        logger.debug("laoding the playlist", playlist)
        response.json(playlist)
    }
}

export default dashboard