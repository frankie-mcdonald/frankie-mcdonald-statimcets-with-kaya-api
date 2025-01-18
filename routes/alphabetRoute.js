import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const dataBuffer = fs.readFileSync("./data/alphabet.json", "utf8");
    const alphabetData = JSON.parse(dataBuffer);
    res.json(alphabetData);
  } catch (error) {
    console.error("Error reading the alphabet data file:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:alphabetId", (req, res) => {
  try {
    const dataBuffer = fs.readFileSync("./data/alphabet.json", "utf8");
    const alphabetData = JSON.parse(dataBuffer);

    const alphabetId = parseInt(req.params.alphabetId, 10);

    // Find alphabet by its ID
    const foundAlphabet = alphabetData.find(
      (alphabet) => alphabet.id === alphabetId
    );

    if (!foundAlphabet) {
      return res.status(404).send("Alphabet not found");
    }

    res.json(foundAlphabet);
  } catch (error) {
    console.error("Error reading alphabet data file:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
