const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
	console.log("connected!");
	console.log(req.url,req.method);
	res.setHeader('Content-Type', 'text/html');
	let path = './routes/';

		switch(req.url)     
		{
			case '/' :
				path += 'register.html';
				break;
			case '/naruto' :
				path += 'naruto.html';
				break;	
			case '/colors' :
				path += 'colors.html';
				break;
			case '/colors-update' :
				res.statusCode = 301;
				res.setHeader('Location', '/colors');
				res.end();
				break;
			default :
				path += '404.html';
				break;			
		}

	fs.readFile(path, (err,data) => {
		if(err) 
		{
			console.log(err);
		}
		else 
		{
			res.write(data);
			res.write("<p>thats all!</p>");
			res.end();
		}
	})
});

server.listen('3456', 'localhost',() => {
	console.log("server initiated!!")
});