"use strict";

/**
 * @createdBy Kamal
 * @createdOn 05th Mar 2020
 */

let user = {};

/* ##################################################################################### */
/*trans_id: “123wer”

                db_name: “xgrigstrar”

                db_operation: READ, WRITE, UPDATE, DELETE, EXECUTE (might be enum)

                table_name: “XXXXX”

                sp_name: “XXXXX”

                input: “inuput details mentioned as below”

                output: “output from queries”

                affected_rows: number of rows affected due to above operation

                msg: ”any valid message from nodejs server”*/
//user signup request schema
user.commanReq = {
  body: {
    type: "object",
    properties: {
      trans_id: { type: "string" },
      db_name: { type: "string", enum: ["sample_db1", "sample_db2"] },
      db_operation: {
        type: "string",
        enum: ["READ", "WRITE", "UPDATE", "DELETE", "EXECUTE"]
      },
      table_name: { type: "string" },
      sp_name: { type: "string" },
      input: {
        type: "object"
      },
      output: {
        type: "object"
      },
      affected_rows: { type: "number", default: 0 }
    },
    required: [
      "trans_id",
      "db_name",
      "db_operation",
      "table_name",
      "sp_name",
      "input"
    ]
  }
};

user.commanRes = {
  200: {
    type: "object",
    properties: {
      trans_id: { type: "string" },
      db_name: { type: "string", enum: ["sample_db1", "sample_db2"] },
      db_operation: {
        type: "string",
        enum: ["READ", "WRITE", "UPDATE", "DELETE", "EXECUTE"]
      },
      table_name: { type: "string" },
      sp_name: { type: "string" },
      input: {
        type: "object",
        properties: {
          username: { type: "string" },
          password: { type: "string" }
        },
        required: ["username", "password"]
      },
      output: {
        type: "object",
        properties: {
          statusCode: { type: "number" },
          message: { type: "string" }
        },
        required: ["statusCode", "message"]
      },
      affected_rows: { type: "number", default: 0 }
    },
    required: [
      "trans_id",
      "db_name",
      "db_operation",
      "table_name",
      "sp_name",
      "input",
      "output"
    ]
  }
};
/* ############################################################################################################## */

module.exports = user;
