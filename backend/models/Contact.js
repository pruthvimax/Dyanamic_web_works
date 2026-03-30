import mongoose from "mongoose";

// Schema for storing contact form submissions
const contactSchema = new mongoose.Schema({
  // User full name
  name: String,

  // User mobile number
  mobile: String,

  // User address or location
  address: String,

  // What service or requirement the user is looking for
  lookingFor: String,

  // Additional message from the user
  message: String,
}, { 
  // Automatically adds createdAt and updatedAt fields
  timestamps: true 
});

// Export Contact model
export default mongoose.model("Contact", contactSchema);
