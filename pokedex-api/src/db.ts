import dotenv from 'dotenv';
import { createPool, Pool } from 'mysql';

dotenv.config();

let pool : Pool | null = null;

const init = () => {
    try {
        pool = createPool({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT == undefined ? '' : process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DATABASE,
            connectionLimit: parseInt(process.env.CONN_LIMIT == undefined ? '' : process.env.CONN_LIMIT),
        });
    } catch (e) {
        throw new Error('Database connection failed');
    }
};

export const execute = <T>(query: string, params: string[]): Promise<T> => {
    try {
        if (!pool) {
            init();
        }

        return new Promise<T>((resolve, reject) => {
            pool!.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    } catch (e) {
        throw new Error('MySQL query failed');
    }
};