const http = require('http');

http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(`Request received to ${url.pathname}`);
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`Hello World!`);
  } else {
    res.statusCode = 405;
    res.setHeader('Allow', ['GET']);
    res.end(`Method ${req.method} not allowed`);
  }
}).listen(3000, () => {
  console.log('Server started on port 3000');
});
