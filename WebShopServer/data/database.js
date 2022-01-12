const mangodb = require("mangodb");

const MangoClient = mangodb.MangoClient;

let database;

async function connectToDatabase() {
  const client = await MangoClient.connect("mangodb://localhost:27017");
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("Please connect to the database");
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
