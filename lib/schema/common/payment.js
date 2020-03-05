'use strict';

/**
 * @createdBy Naveen
 * @createdOn 23rd Dec 2019
*/

const common = require('./common');


let payment = {};

//payment basic info
payment.basic = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        totalAmt: { type: 'number', default: 0 },
        payableAmt: { type: 'number',  default: 0 },
        paidAmt: {type: 'number', default: 0},
        discount: {type: 'number', default: 0},
        gst: {type: 'number', default: 0},
        paymentStatus: { type: 'string', enum: ['INITIATED', 'FAILED', 'PAID']}
    },
    required: ['id', 'paymentStatus']
};

//payment additional info
payment.paymentAddInfo = {
    type: 'object',
    properties: {
        paymemntMode: {type: 'string'},
        payableAmt: {type: 'number'},
        createdAt: { type: 'date' },
        updatedAt: { type: 'date' }
    }
}

//payment default schema
payment.default = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        totalAmt: { type: 'number', default: 0 },
        payableAmt: { type: 'number',  default: 0 },
        paidAmt: {type: 'number', default: 0},
        discount: {type: 'number', default: 0},
        paymemntMode: {type: 'string'},
        createdAt: { type: 'date' },
        updatedAt: { type: 'date' },
        paymentStatus: { type: 'string', enum: ['INITIATED', 'FAILED', 'PAID']}
    },
    required: ['id', 'paymentStatus']
}

module.exports = payment;