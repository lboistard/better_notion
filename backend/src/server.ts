const mongoose = require("mongoose");
const app = require('./app')

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

/**
 * Mongo
 */
mongoose.connect(process.env.MONGO_URI, {
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  maxPoolSize: 100,
})
