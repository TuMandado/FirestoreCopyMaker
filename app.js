// Express server that copies data from a given source to a given destination

const express = require('express');
const app = express();

// Set up the server
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Set up the routes
app.get('/', (req, res) => {
    // Show the welcome message
    res.send('Welcome to the server!');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);

// Instructions to run the server
// 1. Install node.js
// 2. Install express
// 3. Run the server
// 4. Open the browser and navigate to http://localhost:3000
// 5. Enjoy!
