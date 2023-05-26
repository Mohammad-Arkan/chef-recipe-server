const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefs = require("./data/chefs.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef Recipe Server!!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chef = chefs.find((chef) => chef.id === id);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`chef-recipe server is running on port: ${port}`);
});
