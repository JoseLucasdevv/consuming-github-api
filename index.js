const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3000", () => {
  console.log("run port 3000");
});

app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/JoseLucasdevv")
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return res.send(`<img src="${data.avatar_url}">`);
    })
    .catch((err) => {
      console.error(err);
    });
});
