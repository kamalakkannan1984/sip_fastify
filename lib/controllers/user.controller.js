"use strict";

/**
 * @createdBy Kamal
 * @createdOn 05th Mar 2020
 */
const userModel = require("../models/user");
let userController = {};

/**
 *
 * @param {Object} req - request object
 * @param {Object} reply - response object
 * @description - user signup function
 */
userController.sipRegister = async (body, regColl, domainColl) => {
  try {
    /*domainColl
      .find()
      .toArray()
      .then(user => {
        console.log(user);
      });*/

    let data = body;
    let doaminDetails = await userModel.getDomains(domainColl, data.domain_name);
    console.log(doaminDetails.domain_id);
    if (doaminDetails != null) {
      data.Domain_id = doaminDetails.domain_id;
      //TODO: delete entry disscuse 
      data.Registered_date = new Date();
      data.last_update = new Date();
      delete data.domain_name;
      await userModel.saveRegister(regColl, data);
    } else {
      body.output = { statusCode: 422, message: "invalid domain" };
    }
    //console.log(body);
    body.output = { statusCode: 200, message: "success" };

    return body;
  } catch (err) {
    return { statusCode: 500, message: "internal server error" };
  }
};

userController.userRegistrationAuth = async (body, userController) => {
  try {
    const findUser = await userController.findOne({
      username: body.input.username
    });
    console.log(findUser);
    body.output = { statusCode: 200, message: "success" };

    return body;
  } catch (err) {
    return new Error();
  }
};

module.exports = userController;
