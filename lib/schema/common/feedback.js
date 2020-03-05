'use strict';

/**
 * @createdBy Naveen
 * @createdOn 23rd Dec 2019
*/

const common = require('./common');
const commonUser = require('./user');
const commonDriver = require('./driver');
const commonVeicle = require('./vehicle');
const commonOrder = require('./order');


let feedback = {};

//feedback basic info
feedback.basic = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        rating: {type: 'number', min: 0, max: 5,  default: 0},
        review: {type: 'string'},
        order: commonOrder.basic,
        createdAt: {type: 'date'},
        updatedAt: {type: 'date'}
    },
    required: ['id', 'rating', 'order']
};

module.exports = feedback;