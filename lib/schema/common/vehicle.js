'use strict';

/**
 * @createdBy Naveen
 * @createdOn 23rd Dec 2019
*/

const common = require('./common');

let vehicle = {};

//vehicle basic innfo
vehicle.basic = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: {type: 'string'},
        modelYear: { type: 'string' },
        vehicleType: { type: 'string' },
        vehicleNo: { type: 'string' },
        vechicleColour: { type: 'string' }
    },
    required: ['id', 'mobile', 'fullName', 'email']
};

//vehicle additional info
vehicle.vehicleAddInfo = {
    type: 'object',
    properties: {
        make: { type: 'string' },
        registrationCertificate: { type: 'array', items: {type: 'string'} },
        insuranceCertificate: { type: 'array', items: {type: 'string'} },
        fitnessCertificate: { type: 'array', items: {type: 'string'} },
        insuranceValidity: {type: 'string'},
        fitnessValidity: {type: 'string'},
        hasVerified: { type: 'boolean', default: false },
        status: { type: 'string', enum: ['ACTIVE', 'BLOCKED']},
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
    }
}

module.exports = vehicle;