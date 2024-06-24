require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 5000;
const path = require("path");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router.js")
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const { METHODS } = require("http");
const serviceRoute = require("./router/service-router.js")
const adminRoute = require("./router/admin-router.js")
const corseoptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, HEAD, PUT, DELETE, PATCH",
  credentials: true,
};
app.use(cors(corseoptions));
app.use(express.json());

//app.use("/api/auth", require(path.join(__dirname, "router/auth-router.js")));

app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin",adminRoute);

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
