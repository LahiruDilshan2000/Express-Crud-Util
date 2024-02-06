import mysql from "mysql2/promise";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const db =  mysql.createPool({
    host: process.env.MYSQL_HOST as string,
    user: process.env.MYSQL_USER as string,
    password:process.env.MYSQL_PASSWORD as string,
    database: process.env.MYSQL_DATABASE as string,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

export default db;
