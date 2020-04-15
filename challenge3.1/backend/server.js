const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const courses = require('./data')

server.use(express.static('public'));
server.use(express.static('assets'));


server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
   
});

server.get("/", function(req, res) {
   const data = {
      image: "./logo-rocketseat.svg",
      title: "Rocketseat",
      description:"Uma empresa com uma vasta experiência em treinamentos e desenvolvimentos de aplicação, usando e ensinado as melhores tecnologias do mercado. Com um time de desenvolvedores e instrutores com experiências e habilidades dentro desse mundo da programação web e mobile.",
      techs: [
         {name: "Node.js", url:"https://nodejs.org/en/"},
         {name: "React.js", url:"https://reactjs.org/"},
         {name: "React Native", url:"https://reactjs.org/"},
      ],
      links: [
         {name: "Github", url: "https://github.com/Rocketseat"},
         {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
         {name: "Facebook", url: "https://www.facebook.com/rocketseat"},
      ],
   };
   return res.render("about", { data });
});

 server.get("/courses", function(req, res) {
    return res.render("courses", { items: courses });
 });

 server.get("/course", function(req, res){
   const id =  req.query.id;

   const course = courses.find(function(course) {
      return course.id == id;
   })
   
   if(!course) {
      return res.send("Course not found");
   }

   return res.render("course", {item: course});
 });

 server.use(function(req, res) {
    res.status(404).render("not-found");
 });

server.listen(3000, function() {
    console.log('Server is running')
});
