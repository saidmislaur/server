const express = require('express')
const mongoose = require('mongoose');
const app = express();
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors')
app.use(cors());
app.use(express.json())
app.use(fileUpload())
app.use(require('./src/routes/index'))
app.use("/image", express.static(path.resolve(__dirname, 'image')));

const PORT = 5050;

app.options(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});
mongoose.connect('mongodb+srv://navManu:pass123@cluster0.bkw1w.mongodb.net/Posts?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log('работает вроде');
  });
  console.log(error)
})
