'use strict';

let recSearchSchema = {};

recSearchSchema.default = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        landmark: {type: 'string'},
        street: {type: 'string'},
        area: {type: 'string'},
        state: {type: 'string'},
        city: {type: 'string'},
        country: {type: 'string'},
        poBox: {type: 'string'},
        fullAddress: {type: 'string'},
        placeId: {type: 'string'},
        lon: {type: 'number'},
        lat: {type: 'number'},
        favPlaceId: {type: 'string'}
    },
    required: ['id', 'placeId', 'lon', 'lat']
};

module.exports = recSearchSchema;