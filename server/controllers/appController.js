import { ColorModel } from "../models/colorModel.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const postColor = async (request, response) => {
  try {
    if (!request.body)
      return response.status(400).send({
        status: "failed",
        message: "Es gibt ein Problem!",
      });
    const { colorCode, colorSelect } = request.body;

    const newColor = new ColorModel({
      inputCode: colorCode,
      colorPic: colorSelect,
    });

    await newColor.save();
    response.status(200).send({
      status: "success",
    });
  } catch (error) {
    console.error(error);
    response.status(500).send({});
  }
};
