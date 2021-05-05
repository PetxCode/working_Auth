const express = require("express");
const getRouter = express.Router();
const verified = require("./PrivateRoute");

getRouter.post("/show", verified, async (req, res, next) => {
  res.status(201).json({
    mgs: "We are ready...!",
  });
});

module.exports = getRouter;
