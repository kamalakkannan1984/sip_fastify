"use strict";

/**
 * @createdBy Naveen
 * @createdOn 13th Dec 2019
 */

let common = {};

common.status = {
  200: {
    type: "object",
    properties: {
      statusCode: { type: "number" },
      message: { type: "string" }
    },
    required: ["statusCode", "message"]
  }
};

common.statusWithoutCode = {
  type: "object",
  properties: {
    statusCode: { type: "number" },
    message: { type: "string" }
  },
  required: ["statusCode", "message"]
};

common.mobile = {
  type: "object",
  properties: {
    countryCode: { type: "string", minLength: 2, maxLength: 2, pattern:"^[0-9]{2}$" },
    number: { type: "string", minLength: 10, pattern:"^[0-9]{10,}$" }
  },
  required: ["countryCode", "number"]
};

common.geoLoc = {
  type: "object",
  properties: {
    lat: { type: "number" },
    lon: { type: "number" }
  },
  required: ["lat", "lon"]
};

common.location = {
  type: "object",
  properties: {
    landmark: { type: "string" },
    street: { type: "string" },
    area: { type: "string" },
    state: { type: "string" },
    city: { type: "string" },
    country: { type: "string" },
    po_box: { type: "string" },
    geoLoc: common.geoLoc,
    fullAddress: { type: "string" }
  }
  /*required: [
    "landmark",
    "street",
    "area",
    "state",
    "city",
    "country",
    "po_box",
    "geoLoc",
    "fullAddress"
  ]*/
};
common.filters = {
  type: "array",
  items: {
    type: "object",
    properties: {
      isActive: { type: "boolean" }
    }
  }
};

common.sort = {
  type: "array",
  items: {
    type: "object",
    properties: {
      sortBy: { type: "string", enum: ["ASC", "DESC"] },
      sortKey: { type: "string" }
    }
  }
};

common.listWithPageReq = {
  type: "object",
  properties: {
    index: { type: "number", default: 0 },
    limit: { type: "number", default: 0 },
    searchText: { type: "string", maxLength: 20 },
    sort: common.sort,
    filters: common.filters,
    isAll: { type: "boolean", default: false }
  }
};

common.permissions = {
  type: "object",
  properties: {
    moduleName: { type: "array", items: { type: "string" } },
    canAdd: { type: "boolean" },
    canEdit: { type: "boolean" },
    canDelete: { type: "boolean" },
    canView: { type: "boolean" }
  }
};

common.getAppDataReq = {
  body: {
    type: "object",
    properties: {
      version: { type: "string" }
    }
  }
};

common.getAppDataRes = {
  200: {
    type: "object",
    properties: {
      statusCode: { type: "number" },
      message: { type: "string" },
      data: {
        type: "object",
        properties: {
          isActive: { type: "boolean" },
          isDeleted: { type: "boolean" },
          isOrderInProgress: { type: "boolean" },
          isForceUpdate: { type: "boolean" },
          sourceLocation: common.geoLoc,
          dropOffLocation: common.geoLoc
        },
        required: [
          "isActive",
          "isDeleted",
          "isOrderInProgress",
          "isForceUpdate"
        ]
      }
    },
    required: ["statusCode", "message", "data"]
  }
};

module.exports = common;
