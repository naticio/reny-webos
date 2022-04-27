const app = require("express")();
const path = require("path");

const PORT = process.env.PORT || 3000;

// app.get("/", function (req, res) {
//   res.redirect("/src/index.html");
// });

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
