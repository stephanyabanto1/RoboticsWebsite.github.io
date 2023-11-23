const express = require('express');
const app = express();
const port = 3001; // or any other port you prefer
const cors = require('cors');
const mysql = require('mysql2');


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


app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
     
    //request to insert something into the database 
    db.query("INSERT INTO users (username, password) VALUES (?,?)",[username, password],(err, result) => {
      if(err){
        console.log(err)
      }else{
        res.send({username: username})
      }
    } )
    
  // Handle your API logic here
  res.send('Like and Suscribe: ')
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});