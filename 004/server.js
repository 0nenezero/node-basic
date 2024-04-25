const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Request from client: ${req.url}`);
  // console.log(req);
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello world!");
  res.end();
});
server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
