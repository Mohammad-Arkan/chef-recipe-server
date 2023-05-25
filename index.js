const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Chef Recipe Server!!");
});

app.listen(port, () => {
  console.log(`chef-recipe server is running on port: ${port}`);
});
