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
            const res = await domainColl.findOne({ "domain_name": domain_name, "active": 1 }, { _id: 0, domain_id: 1 });

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
            //console.log(data);           
            const res = regColl.insertOne(data);
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

userModel.deleteRegister = (regColl, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("delete register");
            const deleteItem = regColl.deleteMany({
                Username: data.Username,
                Domain_id: data.Domain_id,
                device_type: data.device_type
            });
            resolve(deleteItem);
        } catch (err) {
            reject(err);
        }
    });
}



module.exports = userModel;