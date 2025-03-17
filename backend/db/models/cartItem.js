const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CartItem extends Model {
        static associate(models) {
            CartItem.belongsTo(models.Cart, { foreignKey: 'cartId', as: 'cart' });
            CartItem.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' }); 
            CartItem.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
        }
    }
    CartItem.init({
        cartId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        productId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        orderId:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
        {
            sequelize,
            modelName: 'CartItem',
            tableName: 'CartItems',
        });
    return CartItem;
}