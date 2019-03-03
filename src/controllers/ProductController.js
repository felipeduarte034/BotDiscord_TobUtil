const mongoose = require("mongoose");
require("../models/product");
const Product = mongoose.model("Product");

module.exports.readAll = async () => {
    const prods = await Product.find();
    if (prods.length)
        return prods;
    else
        return 0;
}

module.exports.create = async (product) => {
    const prod = await Product.create(product);
    return prod;
}

module.exports.read = async (id) => {
    const prod = await Product.findById(id);
    return prod;
}

module.exports.update = async (id, product) => {
    const prod = await Product.findByIdAndUpdate(id, product, { new: true });
    return prod;
}

module.exports.delete = async (id) => {
    const prod = await Product.findByIdAndRemove(id);
    return prod;
}