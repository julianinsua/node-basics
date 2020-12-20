const http = require("http");

const rqListener = (req, res) => {
	console.log(req.url, req.method, req.headers);
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>My first Node App</title></head>");
	res.write("<body><h1>Hello World!</h1></body>");
	res.write("</html>");
	res.end();
	//process.exit();
};

const server = http.createServer(rqListener);

server.listen(3000);
