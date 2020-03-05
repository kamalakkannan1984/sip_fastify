"use strict";

/**
 * @createdBy Kamal
 * @createdOn 12th Feb 2020
 */



let authHandler = {};

//validate Basic auth for public apis
authHandler.validate = (username, password, req, reply, done) => {
    username == appConfig.basic_uname && password == appConfig.basic_pw ?
        done() :
        done(new Error("Authorization token is required"));
};

/**
 *
 * @param {Object} req - request object
 * @param {Object} reply - reply object
 * @param {Object} done - done object can be called once verification is done
 */
authHandler.validateSession = (req, reply, done) => {
    try {
        done();
    } catch (err) {
        return done(resMsg.INVALID_AUTH);
    }
};


module.exports = authHandler;