var express = require('express');


var app = express();

app.use(express.static('public'));



var students = [
  "Andrew Kolander",
  "Anthony Maki",
  "Brian Anderson",
  "Brian Verduzco",
  "Connor O'Gara",
  "Cormac Strahan",
  "Donovan Goertzen",
  "Hillary Manning",
  "Jon Wilson",
  "Justin Doty",
  "Katie Vogel",
  "Kyle Quamme",
  "Liz Kerber",
  "Megan Martinson",
  "Richard Camara",
  "Ryan Mattson",
  "Sahasha Reese",
  "Tracy Vincent",
  "Trent Johnson"
];

app.get('/students', function(request, response){
  response.send(students);
});



var server = app.listen(process.env.PORT || 3000,
  function(){
    var port = server.address().port;
    console.log('Listening on port', port);
  });
