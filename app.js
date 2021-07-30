require("dotenv").config();
require('./database/client');

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const mockDataRouter = require("./routes/mock");
const tripRouter = require("./routes/trip");
const userRouter = require("./routes/user");
const loadMockData = require("./utils/loadMockData");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(loadMockData);

app.use("/", indexRouter);
app.use("/mock", mockDataRouter);
app.use("/gettrip", tripRouter);
app.use('/user', userRouter)

module.exports = app;
