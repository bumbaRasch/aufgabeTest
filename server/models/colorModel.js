import mongoose from "mongoose";

const colorCodeSchema = new mongoose.Schema({
  inputCode: {
    type: String,
  },
  colorPic: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

export const ColorModel = mongoose.model("ColorModel", colorCodeSchema);

