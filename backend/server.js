const express = require("express");
const app = express();
const cors = require("cors");
const serveStatic = require("serve-static");
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(serveStatic(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
