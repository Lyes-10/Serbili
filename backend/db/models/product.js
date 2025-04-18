const { Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Product extends Model {
        static associate(models) {
            Product.hasMany(models.CartItem, { foreignKey: 'productId', as: 'cartItems' });
        }
    }
    Product.init({
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0, // Default: No stock available
            validate: {
                min: 0, // Stock can't be negative
            },
        },
        image:{
            type: DataTypes.STRING,
            allowNull:false
        },
        category:{
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false
        },
        rating:{
            type: DataTypes.FLOAT,
            allowNull:false
        },
        color:{
            type: DataTypes.STRING,
            allowNull:true
        },
        size:{
            type: DataTypes.STRING,
            allowNull:true
        },
        
    },
    {
        sequelize,
        modelName:'Product',
        tableName:'Products'
    })
    return Product
}