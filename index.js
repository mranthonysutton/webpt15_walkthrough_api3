const server = require("./server");
const PORT = 1337;

server.listen(PORT, () => {
  console.log(`\n *** Server running at http://localhost:${PORT}... *** \n`);
});

module.exports = server;
