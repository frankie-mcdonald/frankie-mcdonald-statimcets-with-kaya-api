import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("Hello humans");
});

app.listen(PORT, () => {
  console.log("Server is running away on localhost:${PORT}");
});
