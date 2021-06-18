import express from "express";
import bodyParser from "body-parser";
import Pusher from "pusher";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const pusher = new Pusher({
  appId: "1221404",
  key: "76d33d37db36500d2a1b",
  secret: "7a734c93e64238586c57",
  cluster: "eu",
  useTLS: true,
});
app.get("/", function (req, res) {
  // to test if the server is running
  res.send("all green");
});
app.post("/pusher/auth", function (req, res) {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

const port = process.env.PORT || 5000;
app.listen(port);

const origin = req.get("origin");

if (origin == "YOUR BLOG DOMAIN NAME OR IP") {
  // authenticate the request
}
