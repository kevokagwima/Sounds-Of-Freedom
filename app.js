const { MongoClient } = require("mongodb");

async function run() {
  const uri =
    "mongodb+srv://kevokagwima:Hunter9039@cluster0.m9ie8sj.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("database connected");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
run().catch(console.error);
