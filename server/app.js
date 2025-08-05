const express = require("express");
const app = express();
const cors = require("cors");
const contactRouter = require("./Routers/contactRouter");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", contactRouter);

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:${PORT}");
});
