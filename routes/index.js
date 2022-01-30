const express = require("express");
const apiRouter = express.Router();
const cartRouter = require("./cart");
const ordersRouter = require("./orders");
const productsRouter = require("./products");
const usersRouter = require("./users");

apiRouter.use("/cart", cartRouter);
apiRouter.use("/orders", ordersRouter);
apiRouter.use("/products", productsRouter);
apiRouter.use("/users", usersRouter);

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
