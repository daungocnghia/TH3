const mongoose = require("mongoose");


const mongoURL = "mongodb+srv://<db_username>:<db_password>@ngia.vqy01rg.mongodb.net/";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
