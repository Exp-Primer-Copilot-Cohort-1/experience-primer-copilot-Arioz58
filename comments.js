// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be in the same folder as the comments.js file.
// The comments.html file should have the following content:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Comments</title>
//   </head>
//   <body>
//     <h1>Comments</h1>
//     <ul>
//       <li>Comment 1</li>
//       <li>Comment 2</li>
//       <li>Comment 3</li>
//     </ul>
//   </body>
// </html>
// The server should respond with the content of the comments.html file when it receives a request to the root URL (/).

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.html', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
      return;
    }

    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
