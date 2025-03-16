const http = require('http');
const port = 80;

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
}).listen(port, () => console.log(`Server running on port ${port}`));
