import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";
import routes from "./routes";
var cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

mongoose.Promise = global.Promise;
// const url = "mongodb://localhost/CRMdb";
const url = "mongodb://localhost:27017/sahal";
// const url =
// "mongodb+srv://abdulrazak:diiriye1992@zeon-m0w0g.mongodb.net/CRMdb?retryWrites=true&w=";
mongoose.connect(url, {
  keepAlive: 1,
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//json werbtoken setup
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization) {
    jsonwebtoken.verify(
      req.headers.authorization,
      "RESTFULAPIs",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);

app.get("/", (req, res) =>
  res.send(`Node and Express server is running on ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
