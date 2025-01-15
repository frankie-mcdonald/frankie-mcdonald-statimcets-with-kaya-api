import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const dataBuffer = fs.readFileSync("./data/numbers.json", "utf8");
    const numbersData = JSON.parse(dataBuffer);
    res.json(numbersData);
  } catch (error) {
    console.error("Error reading the numbers data file:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:numberId", (req, res) => {
  try {
    const dataBuffer = fs.readFileSync("./data/numbers.json", "utf8");
    const numbersData = JSON.parse(dataBuffer);

    const numberId = parseInt(req.params.numberId, 10);

    // Find the number by its ID
    const foundNumber = numbersData.find((number) => number.id === numberId);

    if (!foundNumber) {
      return res.status(404).send("Number not found");
    }

    res.json(foundNumber);
  } catch (error) {
    console.error("Error reading the numbers data file:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
