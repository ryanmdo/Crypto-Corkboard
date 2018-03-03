const express = require('express');

const path = require('path')

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.use(express.static(__dirname + '/client/public'));
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, "/client/public/index.html"));
})




app.listen(port, () => console.log(`Listening on port ${port}`));