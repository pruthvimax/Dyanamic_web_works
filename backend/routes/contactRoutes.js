import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router(); // ✅ IMPORTANT LINE

router.post("/", async (req, res) => {
  try {
    const { name, mobile, address, lookingFor, message } = req.body;

    const newContact = new Contact({
      name,
      mobile,
      address,
      lookingFor,
      message,
    });

    await newContact.save();

    res.status(200).json({ message: "Saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;