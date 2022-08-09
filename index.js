const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const apiRoute = require("./routes/api");

app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Server running in port", PORT);
});
