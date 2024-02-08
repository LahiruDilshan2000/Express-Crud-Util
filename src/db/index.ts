import mysql from "mysql2/promise"
import dotenv from "dotenv";
import process from "process";
import {Sequelize} from "sequelize";

dotenv.config();

const createDatabase = async () => {

    await mysql.createConnection({
        user: process.env.MYSQL_USER as string,
        password: process.env.MYSQL_PASSWORD as string
    })
        .then((connection) => {
            connection.query(`CREATE DATABASE ${process.env.MYSQL_DATABASE as string};`)
                .then(() => {
                    console.log("Database created successfully");
                })
                .catch(reason => {
                    console.log("Database connected successfully");
                });
            connection.end(true);
        });
}

createDatabase();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string, {
        host: process.env.MYSQL_HOST as string,
        dialect: "mysql",
        logging: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    });

sequelize.sync({force: false})
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((err) => {
        console.error('Failed to synchronize database:', err);
    });

export default sequelize;

/*const pool = mysql.createPool({
    host: process.env.MYSQL_HOST as string,
    user: process.env.MYSQL_USER as string,
    password: process.env.MYSQL_PASSWORD as string,
    database: process.env.MYSQL_DATABASE as string,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});*/

//export default pool;

