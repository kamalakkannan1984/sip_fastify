/**
 *
 */


const appConfig = require("../config/app");
let userModel = {};

/**
 * @param {String} userName - where codition to fetch data
 */
userModel.findUserByUsername = userName => {
    return new Promise(async(resolve, reject) => {
        try {
            resolve();
        } catch (err) {
            reject(err);
        }
    });
};



module.exports = userModel;