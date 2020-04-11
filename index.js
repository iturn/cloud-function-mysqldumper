const { Storage } = require("@google-cloud/storage");
const mysqldump = require("mysqldump");

exports.run = async () => {
  console.log("Start");

  // todo make this work for many databases
  const dumpObject = await mysqldump({
    connection: {
      host: "localhost",
      port: "3307",
      user: "root",
      password: "password",
      database: "api-db",
    },
    format: false,
  });

  const storage = new Storage({
    keyFilename: process.env.keyFilePath,
  });
  const myBucket = storage.bucket(process.env.gcBucket);

  const stream = myBucket.file("test/test.dump").createWriteStream();
  stream.write(dumpObject.dump.schema);
  stream.write(dumpObject.dump.data);
  stream.end();

  console.log("End");
};
