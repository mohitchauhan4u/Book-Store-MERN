const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-routes");

//middleware
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://mohitchauhan4u:9306138730@cluster0.loauf.mongodb.net/bookstore"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log("ERROE ", err));
