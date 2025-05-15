let express = require("express");
let app = express(); // Creating server

// Middleware to log requests
app.use((req, res, next) => {
    console.log("Request is working correctly");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello, Express is running!");
});

app.listen(3000, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests.");
});






