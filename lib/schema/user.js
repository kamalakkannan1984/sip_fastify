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
      db_name: { type: "string", enum: ["XGREGISTAR", "sample_db2"] },
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
    }
  }
};

/*sip_authenticate_user_registration */
user.sip_auth = {
  type: "object",
  properties: {
    input: {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" }
      },
      required: ["username", "password"]
    }
  }
};

/*sip_do_user_registration*/
/*"Call_id": "121d5332-408f-1238-f1b4-83897910f890",
        "domain_name": "vectoneapp.webrtc.mundio.com",
        "Contact_address": "79.11.57.202",
        "Ipaddress": "79.11.57.204",
        "IpAddress_type": "0",
        "Password": "243536546",
        "AAA": "1",
        "expires": "3600",
        "Request_cseq": "8743909",
        "status": "1",
        "proxy_username": "",
        "device_type": "",
        "mac_address": "" */
/* o   mand_fields : call_id,domain_name,contact_address,ipaddress,ipaddress_type,username,

      password,aaa,expires,request_cseq,proxy_username,device_type

o   opt fields       :  status,mac_address*/
user.sip_do_reg = {
  type: "object",
  properties: {
    input: {
      type: "object",
      properties: {
        Call_id: { type: "string" },
        domain_name: { type: "string" },
        Contact_address: { type: "string" },
        Ipaddress: { type: "string" },
        IpAddress_type: { type: "number" },
        Username: { type: "string" },
        Password: { type: "string" },
        AAA: { type: "number" },
        expires: { type: "number" },
        Request_cseq: { type: "number" },
        status: { type: "number" },
        proxy_username: { type: "string" },
        device_type: { type: "string" },
        mac_address: { type: "string" }
      },
      required: ["Call_id", "domain_name", "Contact_address", "Ipaddress",
        "IpAddress_type", "Username", "Password", "AAA", "expires", "Request_cseq", "proxy_username", "device_type"]
    }
  }
};

/* ############################################################################################################## */

module.exports = user;
