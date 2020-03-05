'use strict';

/**
 * @createdBy Naveen
 * @createdOn 23rd Dec 2019
*/

const common = require('./common');
const commonDriver = require('./driver');
const commonUser = require('./user');
const commonVehicle = require('./vehicle');
const commonPayment = require('./payment');

let order = {};

//order basic info
order.basic = {
    type: 'object',
    properties: {
        sourceLocation: common.location,
        dropOffLocation : common.location,
        hasReward: {type: 'boolean'},
        rewardPoint : {type: 'number'},
        startDate: { type: 'string' },
        status: { type: 'string' },
        driver: commonDriver.basic,
        user: commonUser.basic,
        vehicle: commonVehicle.basic,
        payment: commonPayment.basic
    }
};

//driver order basic info
order.driverOrderBasic = {
    type: 'object',
    properties: {
        sourceLocation: common.location,
        dropOffLocation : common.location,
        hasReward: {type: 'boolean'},
        rewardPoint : {type: 'number'},
        startDate: { type: 'string' },
        status: { type: 'string' },
        actualDistance: { type: 'number', default:0 },
        expectedDistance: { type: 'number', default:0 },
        user: commonUser.basic,
        vehicle: commonVehicle.basic,
        payment: commonPayment.basic,
    }
}

//user order basic info
order.userOrderBasic = {
    type: 'object',
    properties: {
        sourceLocation: common.location,
        dropOffLocation : common.location,
        hasReward: {type: 'boolean'},
        rewardPoint : {type: 'number'},
        startDate: { type: 'string' },
        status: { type: 'string' },
        driver: commonDriver.basic,
        vehicle: commonVehicle.basic,
        payment: commonPayment.basic
    }
}

//order additional info
order.orderAddInfo = {
    type: 'object',
    properties: {
        sourceLocation: common.location,
        dropOffLocation : common.location,
        hasReward: {type: 'boolean'},
        rewardPoint : {type: 'number'},
        driver: commonDriver.basic,
        user: commonUser.basic,
        vehicle: commonVehicle.basic,
        payment: commonPayment.basic,
        couponCode: { type: 'string' },
        couponDiscount: { type: 'string' },
        expectedDistance: { type: 'number' },
        actualDistance: { type: 'number' },
        rideDuration: { type: 'number' },
        status: { type: 'string' },
        reason: { type: 'string' },
        startDate: { type: 'date' },
        completedDate: { type: 'date' },
        createdAt: { type: 'date' },
        updatedAt: { type: 'date' },
    }
}

module.exports = order;