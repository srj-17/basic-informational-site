const http = require("node:http");
const fs = require("fs/promises");

http
  .createServer((request, response) => {
    switch (request.url) {
      case "/":
      case "/index.html": {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./routes/index.html", { encoding: "utf8" })
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }

      case "/about": {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./routes/about.html", { encoding: "utf8" })
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }

      case "/contact-me": {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./routes/contact-me.html", { encoding: "utf8" })
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((e) => {
            console.log(e);
          });
        break;
      }

      default: {
        response.writeHead(404, { "Content-Type": "text/html" });
        fs.readFile("./routes/404.html", { encoding: "utf8" })
          .then((data) => {
            response.write(data);
            response.end();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  })
  .listen(8080, () => {
    console.log("server running in localhost:8080");
  });
