
import sequelize from "../config/sequelize.js";
import product_model from "./product_model.js";
import { DataTypes } from "sequelize";

const user_model = sequelize.define("user", {
    id_user: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_user: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pass_user: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    location_user: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    type_user: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

user_model.belongsToMany(product_model, {
    through: 'orders',
    as: "products",     
    foreignKey: "product_id_orders",
});

product_model.belongsToMany(user_model, {
    through: 'orders',
    as: "users",
    foreignKey: "user_id_orders",    
});

export default user_model;