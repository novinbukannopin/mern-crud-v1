import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./route/UserRoutes.js";

const app = express();
mongoose.connect(
  "mongodb+srv://novindev:novindevmongodb@cluster-1.ssi3xbw.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.listen(5000, () => console.log("Server up and running"));
