const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// add compression middleware
app.use(compression());

// serve static assets from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// serve index.html for all remaining routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});