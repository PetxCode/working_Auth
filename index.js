const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const cors = require("cors");
const app = express();
const db =
  "mongodb+srv://Growth_Capital:Growth_Capital@cluster0.xg4zd.mongodb.net/Growth_Capital?retryWrites=true&w=majority";
const codelab = require("./MVC/router");
const codelab1 = require("./MVC/tryPosted");
mongoose
  .connect(db, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to DB successfully...!");
  });

app.use(cors());
app.use(express.json());
app.use("/", codelab);
app.use("/", codelab1);

app.listen(port, () => {
  console.log(`server is ready to connect to port: ${port}`);
});
