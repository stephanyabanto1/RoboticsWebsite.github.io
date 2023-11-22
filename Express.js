const express = require('express');
const app = express();
const port = 3001; // or any other port you prefer
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
  // Handle your API logic here
  res.send('Like and Suscribe: ')
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});