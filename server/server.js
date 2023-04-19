import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "../app.js";

dotenv.config();

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);
const PORT = process.env.PORT || 3000;

(async function start() {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection successful!");
    // Server listen
    app.listen(PORT, () => {
      console.log(`Started on Port ${PORT}`);

      console.log("Server work");
    });
  } catch (error) {
    console.error("DB ERROR", error);
  }
})();
