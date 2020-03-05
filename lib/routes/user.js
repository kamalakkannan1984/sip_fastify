"use strict";

/**
 * @createdBy kamal
 * @createdOn 05th Jan 2020
 */

const userHandler = require("../handlers/user");
const userSchema = require("../schema/user");
const AUTH = "validateUserSession";
module.exports = [{
    method: "POST",
    url: "",
    auth: false,
    handler: userHandler.comman,
    schema: {
        description: "User comman api",
        tags: ["user"],
        //body: userSchema.signupReq.body,
        //response: userSchema.signupRes
    }
}];