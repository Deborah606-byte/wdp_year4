const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const mustache = require("mustache-express");


const connectDB = require('./config/database');

const public = path.join(__dirname, "public");
app.use(express.static(public));

app.engine("mustache", mustache());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));


// connect to DB
connectDB();
const { connect } = require("./routes/homeroutes");
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require routes
const homeRoutes = require("./routes/homeroutes");
const aboutRoutes = require("./routes/about");
const signinRoutes = require("./routes/signin");
const signupRoutes = require("./routes/signup");
const eventRoutes = require("./routes/event");


const userRoutes = require("./routes/backendRoutes/usersRoutes");
const createEventRoutes = require("./routes/backendRoutes/eventRoutes");


app.use("/home", homeRoutes);
app.use("/about", aboutRoutes);
app.use("/signin", signinRoutes);
app.use("/signup", signupRoutes);
app.use("/event", eventRoutes);

app.use("/createEvent", createEventRoutes);
app.use("/user", userRoutes);


app.listen(3001, () => console.log(`server started and running on port 3001 just fine`));

