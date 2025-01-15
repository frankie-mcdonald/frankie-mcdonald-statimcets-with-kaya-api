import express from "express";
import cors from "cors";
import numbersRoute from "./routes/numbersRoute.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 7070;

// ---Middleware---
app.use(cors()); // Fix CORS errors
app.use(express.json()); // Make req.body accessible for POST requests
app.use(express.static("public")); // Serve static files from the "public" folder

// ---Routes---
app.use("/numbers", numbersRoute);

// ---Home Route---
app.get("/", (req, res) => {
  res.send("Hello humans");
});

app.listen(PORT, () => {
  console.log(`Server is running away on http://localhost:${PORT}`);
});
