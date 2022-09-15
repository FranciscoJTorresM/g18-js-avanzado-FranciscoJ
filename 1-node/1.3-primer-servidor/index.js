const http = require ('http');

const server = http.createServer((request, response) => {
    const status = 200; //OK
    const mymeType = { 'content-type': 'text/html' };
    response.writeHead(status, mymeType);
    response.write ('<html> <body> hola desde mi primer servidor! </body> </html>');
    response.end();

});

server.listen(8090);
console.log('servidor ejecutandose...');