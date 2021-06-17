const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello NodeApp!!!!");
});

server.listen(8000);
console.log("Server listening on port 8000: http://127.0.0.1:8000");