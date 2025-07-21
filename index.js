const express = require('express');
const app = express();  

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
//   res.send("<h1>Hello</h1>");
//   res.sendFile(__dirname + '/index.html'); //serves the index.html file
// });
// res.json({
//     Name:"Sahil",
//     age:21
res.end("Hi")
// })

//Path variables is a way to pass dynamic values in the URL
//how can we pass dynamic values in the URL
// Example: /user/1234/
//ways to pass dynamic values in the URL
// 1.Using query parameters
app.get('/watch/:id', (req, res) => {
    const videoId = req.quwery.v; 
    let nid = req.query.n
    res.send("Id got it" +" "+videoIdnid+" "+nid);

    
   
});

// 2. Using params
app.get('/watch/:v/video/:n', (req, res) => {
    console. log(req.params.v); 
    console.log(req.params.n); 
    res.send(" got it: !!!!");
    
});



// 3. Using request body
// Path variables are part of the URL and are defined in the route





//Differece between res.send and res.end
// res.send can send a response with a body, while res.end is used to end the response without sending any additional data.

app.listen(3000, function() {  //starts the server on port 3000
  console.log('Server is running on http://localhost:3000');
});
//ports communication end point (physical and virtual)