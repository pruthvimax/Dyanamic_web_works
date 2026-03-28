import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  lookingFor: String,
  message: String,
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);