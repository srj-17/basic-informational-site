// configure the environment variables
require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const options = {
  root: path.join(__dirname, "routes"),
};

app.get(["/", "/index.html"], (req, res) => {
  const fileName = "/index.html";
  res.sendFile(fileName, options, (e) => {
    if (e) console.error(e);
    else console.log("Sent: ", fileName);
  });
});

app.get("/about", (req, res) => {
  const fileName = "/about.html";
  res.sendFile(fileName, options, (e) => {
    if (e) console.error(e);
    else console.log("Sent: ", fileName);
  });
});

app.get("/contact-me", (req, res) => {
  const fileName = "/contact-me.html";
  res.sendFile(fileName, options, (e) => {
    if (e) console.error(e);
    else console.log("Sent: ", fileName);
  });
});

app.get(/\/.*/, (req, res) => {
  const fileName = "/404.html";
  res.sendFile(fileName, options, (e) => {
    if (e) console.error(e);
    else console.log("Sent: ", fileName);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
