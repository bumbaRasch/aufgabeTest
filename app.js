import express from "express";
import bodyParser from "body-parser";
import * as appController from "./server/controllers/appController.js";
import path from "path";
import { fileURLToPath } from "url";
import { ColorModel } from "./server/models/colorModel.js";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const getIndex = async (request, response) => {
  try {
    const color = await ColorModel.findOne().sort({ createAt: -1 });
    if (!color) {
      response.render(__dirname + "/public/index", {
        primaryColor: "#59ABE3",
      });
    } else {
      response.render(__dirname + "/public/index", {
        primaryColor: color.inputCode,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

app.get("/", getIndex);
app.post("/submit-form", appController.postColor);
