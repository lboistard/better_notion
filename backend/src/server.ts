import dotenv from "dotenv";
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
import bodyParser = require("body-parser");

const app = require('./app')

dotenv.config();

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(cors());
app.use(bodyParser.json())

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
