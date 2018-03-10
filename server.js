const express = require('express');

const path = require('path')

const apiRoutes = require('./routes/api-routes')
const htmlRoutes = require('./routes/html-routes')

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});




app.use(express.static(__dirname + '/client/public'));
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);




app.listen(port, () => console.log(`Listening on port ${port}`));