const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//  Db Connection

const conn = require("./db/conn");
conn();

//  Routes

const routes = require("./routes/router");
app.use("/api", routes);

app.listen(port, () => {
  console.log("Backend funcionando!");
});
