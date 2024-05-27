const productModel = require("../models/productmodel");

//get Products Api(Json) - /api/v1/products
exports.getproducts = async (req, res, next) => {
  const products = await productModel.find({});
  res.json({
    success: true,
    products,
  });
};

//get Single Products Api - /api/v1/product/:id
exports.getsingleproduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
