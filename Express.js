const express = require('express');
const app = express();
const port = 3001; // or any other port you prefer
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require("path")

app.use(bodyParser.urlencoded({extended: false})); //parsing urlencoded data that comes from a form 
app.use(bodyParser.json()); //parsing json data that comes in 
app.use(cors());


// const db  = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : 'Rociotoro1!',
//   database        : 'roboticsinformation'
// });

const db  = mysql.createConnection({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Rociotoro1!',
  database        : 'roboticsinformation'
});



//missing endpont [get]

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
     
    //request to insert something into the database 
    db.query("INSERT INTO users (username, password) VALUES (?,?)",[username, password],(err, result) => {
      if(err){
        return console.log('ERROR: ', err)
      }  
      console.log(result)
      console.log("Request SUCCESS")
      res.send({username: username, res: result})
    } )
});

app.post('/signin', handleSignInFunction)

function handleSignInFunction (request, response, middleware) {
  try {
  // Get data from the database
    const username = request.body.username
    const password = request.body.password

    //Authenticate
    db.query(`select * from users where username='${username}'`, (err, result) => {
      if (result[0]?.password == password) {
        console.log("Successful Login")
        
        response.send(200)
        return
      } else {
        console.log(`Authentication error for user ${username}`)
        response.send(403)
        return
      }
    })
  } catch {
    response.send(500)
    return
  }
}

function handleCallback(err, results, fields) { //just lke the arrow function 
  if(err){
    return console.log(err)
  }
  console.log(results)
}

//server side get me everything on user table 
app.get('/users', (req, res) => {
  db.query("SELECT * FROM users", (err, results, fields)=> {
    if(err){
      return console.log(err)
    }
    res.send({ res: results})
  })


})

app.use(express.static(path.resolve("my-website","build")))
app.use(express.static(path.resolve("my-website","public")))

// app.get("/*", (req,res) => {
//   // const p = path.resolve("my-website", "public","index.html")
//   console.log("sending website")
//   res.sendFile(p)
// })


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});