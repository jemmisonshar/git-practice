const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  const { query } = parsedUrl;

  if (pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome to my website!</h1>');
  } else if (pathname === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>About Me</h1><p>I am a full stack developer with a passion for creating beautiful and functional web applications.</p>');
  } else if (pathname === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Contact Me</h1><form action="/send" method="post"><label for="name">Name:</label><input type="text" id="name" name="name"><br><label for="email">Email:</label><input type="email" id="email" name="email"><br><label for="message">Message:</label><textarea id="message" name="message"></textarea><br><button type="submit">Send</button></form>');
  } else if (pathname === '/send') {
    const name = query.name;
    const email = query.email;
    const message = query.message;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Thanks for reaching out!</h1><p>I'll get back to you as soon as possible.</p>`);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 - Page Not Found</h1><p>The page you are looking for is not available.</p>');
  }
}).listen(8080);
