const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
            Order.hasMany(models.CartItem, { foreignKey: 'orderId', as: 'cartItems' });
        }
    }

    Order.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('PENDING', 'SHIPPED', 'DELIVERED', 'CANCELED'),
            allowNull: false,
            defaultValue: 'PENDING',
        },
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
        timestamps: true, // createdAt & updatedAt
    });

    return Order;
};
