'use strict';

module.exports = {
    port: 3000,
    hostname: '127.0.0.1',
    baseUrl: 'http://localhost:3000',
    mongodb: {
        uri: 'mongodb://localhost/cm_dev_db'
    },
    app: {
        name: 'Contact Manager'
    },
    serveStatic: true,
    session: {
        type: 'mongo',
        secret : 'muhittin',
        resave: false,
        saveUninitialized: true,
    }
}