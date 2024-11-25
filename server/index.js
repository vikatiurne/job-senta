require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const sequelize = require("./dbAdmin");
const middlewareErrors = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200,
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
app.use(express.json());
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
