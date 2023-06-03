import mongoose from "mongoose";

async function connectDB(url, dbName) {
  try {
   const OPTIONS = {
      dbName,
    };

    await mongoose.connect(url, OPTIONS);

    console.log("connection succeed...");
  } catch (err) {
    console.log(`${err} connection failed...`);
  }
}

export default connectDB;
