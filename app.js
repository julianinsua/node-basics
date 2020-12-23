const http = require("http");
const fs = require("fs");

const rqListener = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Enter Mesage</title></head>");
		res.write(
			"<body><form action='/message' method='POST'><input name='message' type='text'/><button type='submit'>Submit</button></form></body>"
		);
		res.write("</html>");
		return res.end();
	}
	if (url === "/message" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
		});

		fs.writeFileSync("message.txt", req.message);
		res.statusCode = 302;
		res.setHeader("Location", "/");
		return res.end();
	}
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
