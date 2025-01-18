import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const dataBuffer = fs.readFileSync("./data/words-random.json", "utf8");
    const wordsPhrasesData = JSON.parse(dataBuffer);
    res.json(wordsPhrasesData);
  } catch (error) {
    console.error("Error reading the words and phrases data file:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:wordsPhrasesId", (req, res) => {
  try {
    const dataBuffer = fs.readFileSync("./data/words-random.json", "utf8");
    const wordsPhrasesData = JSON.parse(dataBuffer);

    const wordPhrasesId = parseInt(req.params.numberId, 10);

    // Find the number by its ID
    const foundNumber = wordsPhrasesData.find(
      (wordsPhrases) => wordsPhrases.id === wordPhrasesId
    );

    if (!foundNumber) {
      return res.status(404).send("Words and phrases not found");
    }

    res.json(foundNumber);
  } catch (error) {
    console.error("Error reading the words and phrases data file:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
