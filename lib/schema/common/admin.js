"use strict";

/**
 * @createdBy Kamal
 * @createdOn 30th Dec 2019
 */

const common = require("./common");
const commonVehicle = require("./vehicle");

let admin = {};

//driver basic info
admin.basic = {
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
/*
//driver additional info
driver.driverAddInfo = {
  type: "object",
  properties: {
    vehicle: commonVehicle.basic,
    isVerified: { type: "boolean", default: false },
    isActive: { type: "boolean", default: false },
    isOnline: { type: "boolean", default: false },
    isDeleted: { type: "boolean", default: false },
    licenseKey: { type: "array", items: { type: "string" } },
    licenseValidity: { type: "string" },
    hasVerified: { type: "boolean", default: false },
    policeVerificationCertificate: { type: "array", items: { type: "string" } },
    lastUpdatedDate: { type: "string" },
    rating: { type: "number", default: 0 },
    hoursOnline: { type: "number", default: 0 },
    totalOrdersDistance: { type: "number", default: 0 },
    totalOrders: { type: "number", default: 0 },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
    earnings: { type: "number", default: 0 }
  }
};

driver.driverWithVehicle = {
  type: "object",
  properties: {
    id: { type: "string" },
    fullName: { type: "string" },
    profPic: { type: "string" },
    mobile: common.mobile,
    email: { type: "string" },
    vehicle: commonVehicle.basic,
    rating: { type: "number", default: 0 }
  },
  required: ["id", "mobile", "fullName", "email"]
};

driver.profile = {
  type: "object",
  properties: {
    id: { type: "string" },
    fullName: { type: "string" },
    profPic: { type: "string" },
    mobile: common.mobile,
    email: { type: "string" },
    vehicle: commonVehicle.basic,
    rating: { type: "number", default: 0 },
    hoursOnline: { type: "number", default: 0 },
    totalOrdersDistance: { type: "number", default: 0 },
    totalOrders: { type: "number", default: 0 },
    totalEarnings: { type: "number", default: 0 },
    todayEarnings: { type: "number", default: 0 }
  },
  required: ["id", "mobile", "fullName", "email"]
};

//driver default schema
driver.default = Object.assign({}, driver.basic);
driver.default.properties = Object.assign(
  {},
  driver.default.properties,
  driver.driverAddInfo.properties
);
*/
module.exports = admin;
