const S = require("sequelize");
const db = require("../config/db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    description: {
      type: S.TEXT,
      allowNull: false
    },
    price: {
      type: S.INTEGER,
      allowNull: false
    },
    stock: {
      type: S.INTEGER,
      allowNull: false
    },
    imgUrl: {
      type: S.TEXT,
      allowNull: false
    },
    rating: {
      type: S.INTEGER,
      defaultValue: null
    }
  },
  { sequelize: db, modelName: "product" }
);
