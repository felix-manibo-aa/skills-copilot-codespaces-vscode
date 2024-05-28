// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Creating a new comment');
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  res.send(`Getting comment with id ${req.params.id}`);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
  res.send(`Updating comment with id ${req.params.id}`);
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
  res.send(`Deleting comment with id ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
