//imports
const http = require('http');
const fs = require('fs');


//create server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/remove_book':
            path += 'remove_book.html'; 
            
            break;
        case '/view_all':
            path += 'view_all.html';
            break;

        case '/':
            path += 'admin_page.html';
            break;
        default:
            path += '404.html';
            break;
    }

fs.readFile( path, (err, data) => {
    if(err){
        console.log(err);
        res.end();
    } else{
       // res.write(data);
        res.end(data);
    }
})



})

//listen to server
server.listen(3000, 'localhost', () => {
    console.log('Listening to requests on port 3000');
})