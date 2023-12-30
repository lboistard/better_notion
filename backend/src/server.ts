
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = require('./app')



const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

/**
 * Mongo
 */
const client = new MongoClient(
  process.env.MONGO_URI, 
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  } 
);
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
