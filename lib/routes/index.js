"use strict";

/**
 * @createdBy kamal
 * @createdOn 05th Jan 2020
 */

/**
 * @param {Object} fastify - fastify
 */
module.exports.registerRoutes = function(fastify) {
    const fs = require("fs");
    const files = fs.readdirSync(__dirname);
    files.forEach(file => {
        if (file != "index.js" && file != "admin") {
            let routes = require(`${__dirname}/${file.slice(0, -3)}`);

            //register each routes into fastify
            routes.forEach(route => {
                route.url = '/api' + route.url;
                if (route.auth) {
                    route["preHandler"] = fastify.auth([fastify[route.auth]]);
                }
                fastify.route(route);
            });
        }
    });
};