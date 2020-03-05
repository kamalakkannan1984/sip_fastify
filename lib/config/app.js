"use strict";

/**
 * @createdBy Naveen
 * @createdOn 13th Dec 2019
 */

module.exports = {
    server: {
        host: process.env.HOST ? process.env.HOST : "localhost",
        port: process.env.PORT ? process.env.PORT : 5000
    },
    logger_level: process.env.LOGGER_LEVEL,
    jwt_secret: process.env.JWT_SECRET ?
        process.env.JWT_SECRET : "sscret",
    basic_uname: process.env.BASIC_UNAME,
    basic_pw: process.env.BASIC_PW,
    //postgres_uname: process.env.PS_UNAME ? process.env.PS_UNAME : "devuser",
    //postgres_pw: process.env.PS_PW ? process.env.PS_PW : "dev1234$",
    //postgres_db: process.env.PS_DB ? process.env.PS_DB : "postgres",
    //postgres_host: process.env.PS_HOST ? process.env.PS_HOST : "192.168.11.111",
    //postgres_port: process.env.PS_PORT ? process.env.PS_PORT : "8383",
    //postgres_schema: process.env.PS_SCHEMA ? process.env.PS_SCHEMA : "msadev",
    apiRoutePrefix: "/api",
    swagger_options: {
        exposeRoute: true,
        routePrefix: "/api/documentation",
        swagger: {
            host: `${process.env.HOST ? process.env.HOST : "localhost"}:${
        process.env.PORT ? process.env.PORT : 5000
      }`,
            info: {
                title: "SIP",
                description: "sip api swagger documentation",
                version: process.env.VERSION
            },
            consumes: ["application/json"],
            produces: ["application/json"],
            tags: [{
                    name: "health",
                    description: "Testing related end-points"
                },
                {
                    name: "user",
                    description: "User related end-points"
                }
            ]
        }
    },
    userSupportVersion: "0.0.2",
    isUserForceUpdate: false,
    driverSupportVersion: "0.0.2",
    isDriverForceUpdate: false
};