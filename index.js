const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set 'views' directory
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // You can use any templating engine like EJS, Pug, etc.

// Define your routes
app.get('/', (req, res) => {
  res.render('index'); // Render your index.ejs file located in the views folder
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
