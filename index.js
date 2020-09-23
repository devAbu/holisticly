const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // to support JSON-encoded bodies

app.use(bodyparser.json());
var urlencodedParser = bodyparser.urlencoded({
  extended: false
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/views/index.html'));
})

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/views/index.html'));
})

app.get('/coaching', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/views/index.html'));
})

app.get('/media', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/views/index.html'));
})

app.get('/treatments', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/views/index.html'));
})

app.get('/wellbeing/test', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/views/index.html'));
})

app.get('/details', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/views/index.html'));
})

app.get('/blog', (req, res) => {
  console.log('Blog')
})

app.get('/profile', (req, res) => {
  console.log('User profile')
})

app.get('/profile/edit', (req, res) => {
  console.log('juhu')
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
