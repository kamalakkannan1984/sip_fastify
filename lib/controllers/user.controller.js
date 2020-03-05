"use strict";

/**
 * @createdBy Kamal
 * @createdOn 05th Mar 2020
 */

let userController = {};

/**
 *
 * @param {Object} req - request object
 * @param {Object} reply - response object
 * @description - user signup function
 */
userController.userRegistration = async (body, userCollection) => {
  try {
    userCollection
      .find()
      .toArray()
      .then(user => {
        console.log(user);
      });

    body.output = { statusCode: 200, message: "success" };

    return body;
  } catch (err) {
    return new Error();
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
