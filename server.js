const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.use((req, res) => res.status(404).send('404 not found...'));

app.listen(8000, () => console.log('Server is running on port 8000'));
