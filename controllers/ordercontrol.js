const ordermodel = require("../models/ordermodel");

// create order= /api/v1/order
exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  ).toFixed(2);
  const status = "pending";

  const order = await ordermodel.create({ cartItems, amount, status });

  res.json({
    success: true,
    order,
  });
};
