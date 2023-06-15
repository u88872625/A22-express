const express = require("express");
const app = express();
const port = 3000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { style: "home.css" });
});

app.get("/about", (req, res) => {
  res.render("About", { style: "about.css" });
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", { style: "portfolio.css" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { style: "contact.css" });
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});
