const router = require("express").Router();
const Product = require("../models/products");
const Category = require("../models/categories");

router.post("/newProduct", function(req, res) {
  Product.create(req.body).then(() => {
    Product.findAll({ include: [Category] }).then(products =>
      res.send(products)
    );
  });
});

router.put("/editproduct/:id", function(req, res) {
  Product.findOne({ where: { id: req.params.id } })
    .then(product =>
      product.update({
        name: req.body.product.name,
        description: req.body.product.description,
        price: req.body.product.price,
        stock: req.body.product.stock,
        img1Url: req.body.product.img1Url,
        img2Url: req.body.product.img2Url
      })
    )
    .then(updatedProduct => res.send(updatedProduct));
});

router.post("/newCategory", function(req, res) {
  Category.create(req.body).then(() => {
    Category.findAll().then(categories => res.send(categories));
  });
});

router.put("/downProduct", function(req, res) {
  Product.findOne({ where: { id: req.body.id } })
    .then(prod => prod.update({ display: req.body.display }))
    .then(prodBajado => {
      Product.findAll({ include: [Category] }).then(prodDown =>
        res.status(201).send(prodDown)
      );
    });
});

module.exports = router;