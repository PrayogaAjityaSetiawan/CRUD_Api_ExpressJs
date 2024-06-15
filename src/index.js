require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT || 5000

const usersRoutes = require("./routes/user")
// Memanggil middleware dari folder middleware
const middlewareLogs = require("./middleware/logs")
const app = express();


// Middleware
app.use(middlewareLogs);
app.use(express.json());

// Routing
app.use("/user", usersRoutes);
// check server
app.listen(PORT, () => {
    console.log(`Server Berjalan Pada Port ${PORT}`);
})