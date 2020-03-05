"use strict";

/**
 * @createdBy kamal
 * @createdOn 05th Mar 2020
 */
const userSchema = require("../schema/user.js");
/**
 * @param {Object} fastify - fastify
 */
function configureRoutes(fastify, options, done) {
  const apihandler = require("../handlers/user");
  const opts = {
    schema: {
      body: userSchema.commanReq.body
      //response: userSchema.commanRes
    }
  };
  fastify.post("/api", opts, apihandler.comman);
  done();
}

module.exports = configureRoutes;
