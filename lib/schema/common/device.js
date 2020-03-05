'use strict';

/**
 * @createdBy Naveen
 * @createdOn 13th Dec 2019
*/

let common = {};

common.device = {
    type: 'object',
    properties: {
        deviceName: {type: 'string'},
        deviceToken: {type: 'string'},
        deviceId: {type: 'string'},
        osType: {type: 'string'},
        osVersion: {type: 'string'},
        osName: {type: 'string'},
        appVersion: {type: 'string'}
    },
    required: ['deviceId', 'appVersion', 'deviceToken']
};

module.exports = common;