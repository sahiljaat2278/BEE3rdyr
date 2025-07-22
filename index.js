// //create server using express'
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.use(express.json());
// app.post('/submit', (req, res) => {
//     console.log(req.body);
//     let name = req.body.name;
//     let email = req.body.email;
//     let data = {
//         name: name,
//         email: email
//     };
//     res.send(data);
//    console.log(data);
//    const jsonData = JSON.stringify(data);
  
//     fs.appendFile("../User.txt",jsonData,(err)=>{
//         if(err){
//             return console.log("error in writing in file ");
//         }
//     });

  
   

// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const filePath = path.join(__dirname, 'User.txt');

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    const newUser = {
        name: name,
        email: email
    };

    fs.readFile(filePath, 'utf-8', (err, data) => {
        let users = [];

        if (!err ) {
            try {
                users = JSON.parse(data); // parse existing array
                if (!Array.isArray(users)) users = []; // fallback
            } catch {
                users = [];
            }
        }

        users.push(newUser);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return console.log(err);
            }
            res.send(users); // send updated array
        });
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});