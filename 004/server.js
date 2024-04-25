const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`Request from client: ${req.url}`);
  // console.log(req);
  res.setHeader("Content-Type", "text/html");
  const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
