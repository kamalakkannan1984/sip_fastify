"use strict";

/**
 * @createdBy Kamal
 * @createdOn 05th Jan 2020
 */


let userHandler = {};

/**
 *
 * @param {Object} req - request object
 * @param {Object} reply - response object
 * @description - user signup function
 */
userHandler.comman = async(req, reply) => {
    try {
        let body = req.body;
        console.log(body);
        // This collection comes from "mongodb://mongo1/mydb"
        const coll1 = this.mongo.MONGO1.db.collection('user');
        // This collection comes from "mongodb://mongo2/otherdb"
        const coll2 = this.mongo.MONGO2.db.collection('user');

        console.log(coll1);
        console.log(coll2);

        reply.send({});

    } catch (err) {
        logger.info(err);
        reply.send({});
    }
};


module.exports = userHandler;