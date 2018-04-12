const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

    if (request.method === "GET"){
        if (request.url === '/')
            response.write("İndex");
        else if (request.url === 'contact')
            response.write("contact page");
        else
            response.write("Not Found");
    }

    response.end();
});

server.listen(5000);
