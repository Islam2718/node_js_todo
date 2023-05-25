const http = require('http'); 

const server = http.createServer((req, res) => { 
    if (req.url === '/') {
        res.write('Hello Irtaza');
        res.end();
    } else if (req.url === '/about') {
        res.write('Hello Irtaza, ');
        res.write('How Are You?');
        res.end();
    } else { 
        res.write('Abdur Rahman Not Found !');
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000');