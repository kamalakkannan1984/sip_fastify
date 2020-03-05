"use strict";

/**
 * @createdBy Kamal
 * @createdOn 04th Jan 2020
 */

const bcrypt = {};

const bcryptjs = require("bcryptjs");
const BCRYPT_SALT_ROUNDS = 12;

/**
 * Create hashed password
 * @param {Object} user - user object
 */
bcrypt.createHashedPassword = async user => {
  if (!user.hasOwnProperty("password")) {
    return Promise.resolve(user);
  }
  try {
    const hashedPassword = await bcryptjs.hash(
      user.password,
      BCRYPT_SALT_ROUNDS
    );
    user.password = hashedPassword;
    return user;
  } catch (error) {
    console.error("Error bcrypt: ", error);
  }
};

/**
 * Authendication for DB password and user password
 * @param {Object} body - body object for user
 * @param {Object} userFromDb - userFromDb object for database
 */
bcrypt.authentication = async (body, userFromDb) => {
  const canAccess = await bcryptjs.compare(body.password, userFromDb.password);
  if (canAccess) {
    return Promise.resolve(canAccess);
  }
  return Promise.reject();
};

/**
 * check password for DB password and user password
 * @param {Object} body - body object for user
 * @param {Object} userFromDb - userFromDb object for database
 */
bcrypt.checkPassword = async (body, userFromDb) => {
  const canAccess = await bcryptjs.compare(body.password, userFromDb.password);
  return Promise.resolve(canAccess);
};

module.exports = bcrypt;
