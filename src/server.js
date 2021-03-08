const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/teste", (req, res) => {
  return res.json({ status: "ok", message: "your request has be success!" });
});

app.listen(process.env.PORT || 3000);