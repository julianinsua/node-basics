const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
	console.log("Run this every time");
	next();
});

app.use("/add-product", (req, res, next) => {
	console.log("Inside the add product middleware");
	res.send("<h1>Add Product</h1>");
});

app.use("/", (req, res, next) => {
	console.log("Inside another middleware");
	res.send("<h1>Hello from express!</h1>");
});

app.listen(3000);
