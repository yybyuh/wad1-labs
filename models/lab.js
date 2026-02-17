'use strict'

import logger from "../utils/logger.js"
import JsonStore from "./json-store.js"

const lab = {
    store: new JsonStore('./models/lab.json', { info: {} }),
    collection: 'employee',

    getAppInfo() {
        return this.store.findAll(this.collection)
    },
}

export default lab