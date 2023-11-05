const express = require('express');
const bodyParser = require('body-parser');
require("./db/conn")
const assets=require('./Routes/assetRoutes.routes')
const transactions=require('./Routes/transactionRoutes.routes')
const user=require("./Routes/userRoutes.routes")
const cookieParser=require("cookie-parser")
const authMiddleWare=require("./middleware/auth.middleware")

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

// Routes
app.use(assets);
app.use(transactions);
app.use(user)
// app.use('/assets', assets); // Use the correct router object
// app.use('/transactions', transactions); // Use the correct router object
// app.use('/users', user);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});