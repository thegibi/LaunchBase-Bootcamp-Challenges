const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));
server.use(express.static('assets'));


server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server
});

server.get("/main", function(req, res) {
   return res.render("main");
});

server.get("/about", function(req, res) {
    return res.render("about");
 });

 server.get("/courses", function(req, res) {
    return res.render("courses");
 });

 server.use(function(req, res) {
    res.status(404).render("not-found");
 });

server.listen(3000, function() {
    console.log('Server is running')
});
