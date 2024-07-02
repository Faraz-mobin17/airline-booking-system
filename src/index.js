const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const { serverConfigs } = require("./config");

// experss app initialization
const app = express();

// cors
app.use(
  cors({
    origin: serverConfigs.ORIGIN,
    credentials: true,
  })
);

// middlewares

app.use(morgan("dev"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.text());
app.use(express.raw());
app.use(express.static(path.join(__dirname, "public")));

// routes
const apiRouter = require("./routes/");

app.use("/api", apiRouter);

app.listen(serverConfigs.PORT, () =>
  console.log(`Server is running on port ${serverConfigs.PORT}`)
);
