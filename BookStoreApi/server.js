const http = require('http');
const books = require('./books');

const server = http.createServer((req, res) => {
    if (req.url === '/books') {
        // Allow CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(books()));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Book Store!');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});