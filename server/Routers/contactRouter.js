const express = require("express");
const router = express.Router();
const Contact = require("../model/contact");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

router.use(cors());
router.use(express.json());

router.post("/contact", (req, res) => {
  const contactFile = path.join(__dirname, "../data/contact.json");
  const newContact = req.body;

  // Read existing contacts
  fs.readFile(contactFile, "utf8", (err, data) => {
    let contacts = [];
    if (!err && data) {
      contacts = JSON.parse(data);
    }
    contacts.push(newContact);

    // Save updated contacts
    fs.writeFile(contactFile, JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving contact" });
      }
      res
        .status(201)
        .json(
          "Your message has been sent, You will be connected Shortly. Thank You"
        );
    });
  });
});

router.get("/contact", (req, res) => {
  const contactFile = path.join(__dirname, "../data/contact.json");
  fs.readFile(contactFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading contacts" });
    }
    res.status(200).json(JSON.parse(data));
  });
});

module.exports = router;
