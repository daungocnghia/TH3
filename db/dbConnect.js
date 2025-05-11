const mongoose = require("mongoose");


const mongoURL = "mongodb+srv://ngia:220903@ngia.vqy01rg.mongodb.net/";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
