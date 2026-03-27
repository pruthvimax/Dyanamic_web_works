import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;