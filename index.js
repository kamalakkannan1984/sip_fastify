"use strict";

/**
 * @createdBy Kamal
 * @createdOn 05th Jan 2020
 */

const appConfig = require("./lib/config/app");
const utils = require("./lib/utils/utils");
/*
refferance: 
https://github.com/siegfriedgrimbeek/fastify-api
https://github.com/fastify/fastify-mongodb

https://github.com/amirilovic/fastify-typescript-starter/blob/master/src/router.ts

https://github.com/fastify/fastify-mongodb
*/

const routes = require("./lib/routes");
const Ajv = require("ajv");
const authHandler = require("./lib/handlers/auth");
const userSchema = require("./lib/schema/user.js");
const fastify = require("fastify")({
    logger: true,
    logLevel: appConfig.logger_level
});
global.logger = fastify.log;

//require("./lib/config/db");
fastify.register(require("fastify-swagger"), appConfig.swagger_options);
fastify.register(require("fastify-cors"), appConfig.cors_options);

fastify
    .register(require("fastify-mongodb"), {
        url: "mongodb://localhost:27017/sample_db1",
        name: "MONGO1"
    })
    .register(require("fastify-mongodb"), {
        url: "mongodb://localhost:27017/sample_db1",
        name: "MONGO2"
    });



//add hooks with relevant handlers
fastify.addHook("preHandler", utils.formReqData);
fastify.addHook("onResponse", utils.formResData);
fastify.addHook("onError", utils.handleError);

//decorate functions
fastify
    .decorate("validateSession", authHandler.validateSession)
    .register(require("fastify-auth"))
    .after(() => {
        //routes.registerRoutes(fastify);
    });

const ajv = new Ajv({
    // the fastify defaults (if needed)
    removeAdditional: true,
    useDefaults: true,
    coerceTypes: true,
    allErrors: true,
    nullable: true
});

//set fastify default schema compiler
fastify.setSchemaCompiler(function(schema) {
    return ajv.compile(schema);
});

//handle unhandled exception
process.on("uncaughtException", err => {
    logger.error(err);
});

//
const opts = {
    schema: {
        body: userSchema.signupReq.body,
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: {
                        type: 'string'
                    }
                }
            }
        }
    }
}

fastify.post('/api', opts,
        function(req, res) {
            // This collection comes from "mongodb://mongo1/mydb"
            const coll1 = this.mongo.MONGO1.db.collection('user');
            // This collection comes from "mongodb://mongo2/otherdb"
            const coll2 = this.mongo.MONGO2.db.collection('user');


            // ...
            // ...
            // do your stuff here
            // ...
            // ...
            res.send({});
        })
    //
    // Run the server!
const start = async() => {
    try {
        await fastify.listen(appConfig.server);
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
};
start();