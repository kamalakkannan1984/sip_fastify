"use strict";

/**
 * @createdBy Kamal
 * @createdOn 05th Mar 2020
 */
const Ajv = require("ajv");
const userController = require("../controllers/user.controller");
let userHandler = {};

/**
 *
 * @param {Object} req - request object
 * @param {Object} reply - response object
 * @description - user signup function
 */
userHandler.comman = async function(req, res, done) {
  try {
    let body = req.body;
    let result = "";

    const schema = {
      type: "object",
      properties: {
        input: {
          type: "object",
          properties: {
            username: { type: "string" },
            password: { type: "string" }
          },
          required: ["username", "password"]
        }
      }
    };
    // This collection comes from "mongodb://mongo1/mydb"
    const userCollection = await this.mongo.MONGO1.db.collection("user");

    switch (body.sp_name) {
      case "do_registration":
        result = await userController.userRegistration(body, userCollection);
        break;
      case "do_registration_auth":
        var ajv = new Ajv();
        var validate = ajv.compile(schema);
        var valid = validate(body);
        if (valid) {
          console.log("1");
          result = await userController.userRegistrationAuth(
            body,
            userCollection
          );
        } else {
          console.log("0");
          res.send({ statusCode: 400, message: validate.errors });
        }
        break;
      default:
        result = "I have never heard of that fruit...";
    }

    //body.output = { statusCode: 200, message: "success" };

    res.send(result);
  } catch (err) {
    res.send({ statusCode: 500, message: "internal server error" });
  }
};

function schemaValidate(body) {}

module.exports = userHandler;
