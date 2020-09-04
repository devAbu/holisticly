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
  console.log('Services')
})

app.get('/coaching', (req, res) => {
  console.log('Coaching')
})

app.get('/media', (req, res) => {
  console.log('Media')
})

app.get('/treatments', (req, res) => {
  console.log('Treatments')
})

app.get('/wellbeing/test', (req, res) => {
  console.log('Wellbeing')
})

app.get('/details', (req, res) => {
  console.log('Details')
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
