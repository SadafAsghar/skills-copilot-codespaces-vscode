// create a web server
const express = require('express');
const app = express();
const port = 3000;

// create a comment
app.post('/comments', (req, res) => {
  res.send('You have created a comment');
});

// get all comments
app.get('/comments', (req, res) => {
  res.send('You have requested all comments');
});

// get a comment
app.get('/comments/:id', (req, res) => {
  res.send('You have requested a comment with id: ' + req.params.id);
});

// update a comment
app.put('/comments/:id', (req, res) => {
  res.send('You have updated a comment with id: ' + req.params.id);
});

// delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('You have deleted a comment with id: ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});