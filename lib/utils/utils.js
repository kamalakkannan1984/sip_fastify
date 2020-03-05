"use strict";

/**
 * @createdBy Kamal
 * @createdOn 05 Jan 2020
 */

const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const axios = require("axios");
let appConfig = require("../config/app");
let utils = {};

//form  post req data
utils.formReqData = (req, reply, done) => {
    done();
};

//process response Object
utils.formResData = (req, reply, done) => {
    done();
};

//process error object
utils.handleError = (req, reply, error, done) => {
    console.log("error", error);

    done();
};

/**
 * @param {Object} data - data to  form the response
 */

utils.formSuccessObject = (statusCode, message, data) => {
    let succssObj = {
        statusCode: statusCode ? statusCode : 200,
        message: message ? message : "Success"
    };

    if (data) {
        succssObj["data"] = data;
    }

    return succssObj;
};

/**
 * @param {Object} err - err to  form the response
 */
utils.formErrorObject = (statusCode, message, err) => {
    const errorObj = {
        statusCode: statusCode ? statusCode : 500,
        message: message ? message : "Failed",
        isError: true
    };

    if (err) {
        errorObj["err"] = err; //error object contains actual error details
    }
    console.log("errorObj", errorObj);

    return errorObj;
};

/**
 * @param {String} id - user id
 * @param {String} userType - user type DRIVER/USER
 */

utils.sendOtp = (user, userType) => {
    return new Promise(async(resolve, reject) => {
        try {
            //after sms gateway enabled send sms to the user
            const otp = generateOtp();
            const smsData = {
                to: user.mobileNo,
                text: `${otp} is the OTP to reset PIN for Mahindra DiGiSENSE account. The OTP is confidential and is valid for 30min`
            };
            await sms
                .sendSms(smsData)
                .then(() => {
                    let updateDataArr = [otp, true, new Date().toUTCString(), user.id];
                    if (userType == "DRIVER") {
                        driverModel.updateOtp(updateDataArr);
                        resolve();
                    } else if (userType == "USER") {
                        userModel.updateOtp(updateDataArr);
                        resolve();
                    }
                })
                .catch(error => {
                    reject(error);
                });
        } catch (err) {
            reject(err);
        }
    });
};

utils.createSession = (userId, deviceId, userType) => {
    return generateToken(userId, deviceId, userType);
};

utils.validateSession = token => {
    return new Promise((resolve, reject) => {
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            resolve(decode);
        } catch (err) {
            reject(err);
        }
    });
};

utils.makeRestPostRequset = url => {
    return new Promise((resolve, reject) => {
        axios
            .post(url)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log("err", err);

                reject();
            });
    });
};

/**
 * Get Current session user id
 * @param {object} req
 */
utils.getSessionId = req => {
    const decoded = utils.validateSession(req.headers.authorization);
    return decoded.userId;
};

utils.generateUpdateQuery = (request, tableName, where) => {
    let values = Object.values(request);
    let keys = Object.keys(request);
    let updatequery =
        "UPDATE " + appConfig.postgres_schema + "." + tableName + " SET ";
    let fields = "";
    keys.forEach(element => {
        if (fields) {
            fields =
                fields + "," + '"' + element + '"' + "='" + request[element] + "'";
        } else {
            fields = '"' + element + '"' + "='" + request[element] + "'";
        }
    });

    let finalQuery = updatequery + fields + " where " + where;
    return finalQuery;
};

/*
form insert query for postgresql

*/

utils.generateInsertQuery = (request, tableName) => {
    let values = Object.values(request);
    let keys = Object.keys(request);
    let insertDynamicQuery =
        "INSERT INTO " + appConfig.postgres_schema + "." + tableName;
    let columns = "";
    keys.forEach(element => {
        if (columns) {
            columns = columns + ',"' + element + '"';
        } else {
            columns = '("' + element + '"';
        }
    });

    let columnValues = "";
    values.forEach(element => {
        if (columnValues) {
            if (typeof element == "string") {
                columnValues = columnValues + ",'" + element + "'";
            } else {
                columnValues = columnValues + "," + element;
            }
        } else {
            columnValues = ") VALUES ('" + element + "'";
        }
    });
    //insertDynamicQuery = insertDynamicQuery ;
    insertDynamicQuery =
        insertDynamicQuery + columns + columnValues + ") RETURNING *";
    return insertDynamicQuery;
};

// console.log(authHandler.createSession('userId', 'isAdmin'));

//check whether auth exists in the request
function isAuthExists(req) {
    if (!req.headers || !req.headers.authorization) {
        return false;
    } else {
        return true;
    }
}

function generateToken(userId, deviceId, userType) {
    let jwtPayload = {
        userId,
        deviceId
    };
    jwtPayload[userType] = true;

    return jwt.sign(jwtPayload, process.env.JWT_SECRET);
}

function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000);
}

utils.formatDate = date => {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
};

module.exports = utils;