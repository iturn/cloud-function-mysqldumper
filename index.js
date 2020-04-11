"use strict";

const { PubSub } = require("@google-cloud/pubsub");
const { Mysqldump } = require("mysqldump-stream");

exports.run = () => {
  console.log("Start");

  // const mysqldump = new Mysqldump("mydatabase", {
  //   gzip: true, //default: false
  //   host: "localhost", //default
  //   port: 3306, //default
  //   user: "root", //default: process.env.USER || 'root'
  //   password: "mypassword", //default: false
  // });

  //   const fs = require("fs");
  //   mysqldump.start();
  //   mysqldump.pipe(fs.createWriteStream("./mydatabase.sql.gz"));
};
