const express = require("express");
const app = express();
const port = 3008;
const morgan = require("morgan");
const sequelize = require("./db");

app.use(morgan("combined"));

app.get("/", (_, res) => {
  res.send("Hello world!");
});

app.get("/fake", (_, res) => {
  const fakeData = [
    {
      id: 1,
      name: "Javascript"
    },
    {
      id: 2,
      name: "Go"
    },
    {
      id: 3,
      name: "Java"
    }
  ];

  res.send(fakeData);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(port, () =>
  console.info(`Example server listening on port ${port}`)
);
