const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const ProductCart = db.define('productCart', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },  
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantify: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

module.exports = { ProductCart };