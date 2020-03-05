/**
 *
 */


const appConfig = require("../config/app");
let userModel = {};

/**
 * @param {String} userName - where codition to fetch data
 */
userModel.findUserByUsername = userName => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve();
        } catch (err) {
            reject(err);
        }
    });
};


userModel.getDomains = (domainColl, domain_name) => {
    return new Promise(async (resolve, reject) => {
        try {
            /*domainColl.findOne({ "domain_name": domain_name, "active": 1 }, { _id: 0, domain_id: 1 }).then(domains => {
                resolve(domains);
            }).catch(err => {
                console.log(err);
                reject(err);
            }); */
            const res = await domainColl.findOne({ "domain_name": domain_name, "active": 1 }, { _id: 0, domain_id: 1 });
            /*domainColl
      .find()
      .toArray()
      .then(user => {
        console.log(user);
      });*/
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

userModel.saveRegister = (regColl, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("registration data");

            const updatedItem = await regColl.findOneAndUpdate({ Call_id: data.Call_id, Domain_id: data.Domain_id, Username: data.Username, device_type: data.device_type }, data, { new: true });

            console.log(updatedItem);
            resolve(updatedItem);
        } catch (err) {
            reject(err);
        }
    });
}



module.exports = userModel;