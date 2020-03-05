'use strict';

/**
 * @createdBy kamal
 * @createdOn 05th Jan 2020
 */

module.exports = [{
    method: 'GET',
    url: '/ping',
    auth: false,
    handler: (req, reply) => {
        reply.send({
            status: 200,
            message: "Success"
        });
    },
    schema: {
        description: 'sip Service health check',
        tags: ['health'],
    }
}]