// create a web server

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(
    JSON.stringify({
      status: 'success',
      message: 'You have reached the comment endpoint',
    })
  );
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});