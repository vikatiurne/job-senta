require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require('path')
const passport = require("passport");

const router = require("./router/index");
const sequelize = require("./dbAdmin");
const middlewareErrors = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL, process.env.API_URL],
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser(process.env.SECRET_KEY));
app.use(
  session({
    secret: process.env.AUTH0_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use("/api", router);
app.use(middlewareErrors);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start().then();
