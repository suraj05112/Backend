const express = require("express")
const app = express()

app.use(express.json())

const notes = []

app.post("/notes", (req, res) => {
  const bodyConsole = req.body.console;
  res.send("noted data");

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
