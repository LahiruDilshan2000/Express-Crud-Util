import Sequelize from "sequelize"
import sequelize from "../db";

const Item = sequelize.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    itemCode: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
    },
    desc: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    unitPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            isDecimal:true,
            min: 0,
            max:1000000
        },
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric:true,
            min: 0,
            max:200
        },
    }
});

export default Item;
