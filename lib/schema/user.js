"use strict";

/**
 * @createdBy Naveen
 * @createdOn 13th Dec 2019
 */

const common = require("./common/common");
const commonUser = require("./common/user");
const commonDriver = require("./common/driver");
const commonDevice = require("./common/device");

let user = {};

//user login request schema
user.loginReq = {
  body: {
    type: "object",
    properties: {
      mobile: common.mobile
    },
    required: ["mobile"]
  }
};

//user login response
user.loginRes = common.status;

//user signup request schema
user.signupReq = {
  body: {
    type: "object",
    properties: {
      fullName: { type: "string", minLength:2, maxLength:20 },
      email: { type: "string", format: "email" },
      mobile: common.mobile,
      device: commonDevice.device
    },
    required: ["fullName", "email", "mobile", "device"]
  }
};

//user signup response
user.signupRes = common.status;

//verify otp request
user.verifyOtpReq = {
  body: {
    type: "object",
    properties: {
      otp: { type: "string" , maxLength:4, minLength:4, pattern:"[0-9]+$" },
      mobile: common.mobile //based on mobile  number verify otp
    },
    required: ["otp", "mobile"]
  }
};

//verify otp request
user.verifyLoginOtpReq = {
  body: {
    type: "object",
    properties: {
      otp: { type: "string" , maxLength:4, minLength:4, pattern:"^[0-9]{4}$" },
      mobile: common.mobile, //based on mobile  number verify otp
      device: commonDevice.device
    },
    required: ["otp", "mobile", "device"]
  }
};

//user otp response
user.loginVerifyOtpRes = {
  200: {
    type: "object",
    properties: {
      statusCode: { type: "number" },
      message: { type: "string" },
      authorization: { type: "string" }
    },
    required: ["statusCode", "message"]
  }
};

//user otp response
user.verifyOtpRes = common.status;

//resend otp request
user.resendOtpReq = {
  body: {
    type: "object",
    properties: {
      mobile: common.mobile
    },
    required: ["mobile"]
  }
};

//user otp response
user.resendOtpRes = common.status;

//TODO:
user.getBasDataReq = {
  body: {
    type: "object",
    properties: {
      fullName: { type: "string" },
      email: { type: "string" },
      mobile: common.mobile
    },
    required: ["fullName", "email", "mobile"]
  }
};

//user profile response
user.getProfileRes = {
  200: {
    type: "object",
    properties: {
      statusCode: { type: "number" },
      message: { type: "string" },
      profile: commonUser.profile
    },
    required: ["statusCode", "message"]
  }
};

//update profile request
user.updateProfileReq = {
  body: {
    type: "object",
    properties: {
      fullName: { type: "string", minLength:2, maxLength:20 },
      email: { type: "string" , format: "email" },
      profilePic: { type: "string" },
      homeAddress: common.location,
      officeAddress: common.location
    },
    required: ["fullName", "email"]
  }
};

//user otp response
user.updateProfileRes = common.status;

//get near by car list
user.getCarListReq = {
  body: {
    geoLoc: common.geoLoc
  }
};

//get driver details
user.getDriverDetailsReq = {
  params: {
    type: "object",
    properties: {
      driverId: { type: "string" }
    },
    required: ["driverId"]
  }
};

//get driver details response
user.getDriverDetailsRes = {
  200: {
    type: "object",
    properties: {
      statusCode: { type: "number" },
      message: { type: "string" },
      driver: commonDriver.default
    },
    required: ["statusCode", "message"]
  }
};

//push notification request
user.notification = {
  type: "object",
  properties: {
    title: { type: "string" },
    message: { type: "string" }
  },
  request: ["title", "message"]
};

user.pushNotification = {
  body: {
    type: "object",
    properties: {
      userId: { type: "string" },
      driverId: { type: "string" },
      notification: user.notification
    }
  }
};

//push notification response
user.pushNotificationRes = {
  200: {
    type: "object",
    properties: {
      statusCode: { type: "number" },
      message: { type: "string" }
    },
    required: ["statusCode", "message"]
  }
};

module.exports = user;
