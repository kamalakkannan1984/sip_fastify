"use strict";

/**
 * @createdBy Naveen
 * @createdOn 13th Dec 2019
 */

const common = require("./common");

let user = {};

user.basic = {
  type: "object",
  properties: {
    id: { type: "string" },
    fullName: { type: "string" },
    profPic: { type: "string" },
    mobile: common.mobile,
    email: { type: "string" }
  },
  required: ["id", "mobile", "fullName", "email"]
};

user.userAddInfo = {
  type: "object",
  properties: {
    userName: { type: "string" },
    homeAddress: common.location,
    officeAddress: common.location,
    isVerified: { type: "boolean", default: false },
    isActive: { type: "boolean", default: false },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
    totalOrders: { type: "number", default: 0 },
    lastLogin: { type: "string" }
  }
};

user.profile = {
  type: "object",
  properties: {
    id: { type: "string" },
    fullName: { type: "string" },
    profPic: { type: "string" },
    mobile: common.mobile,
    email: { type: "string" },
    homeAddress: common.location,
    officeAddress: common.location,
    rewardPoints: { type: "number", default: 0 }
  },
  required: ["id", "mobile", "fullName", "email"]
};

user.default = Object.assign({}, user.basic);
user.default.properties = Object.assign(
  {},
  user.default.properties,
  user.userAddInfo.properties
);

module.exports = user;
