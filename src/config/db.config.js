// TODO: use ts
/* interface DB {
    HOST: string;
    USER: string;
    PASSWORD: string;
    DATABASE: string;
}

export const dbConfig: DB = {
    HOST: process.env.HOST || '',
    USER: process.env.USER || '',
    PASSWORD: process.env.PASSWORD || '',
    DATABASE: process.env.DB || '',
};
 */

export const dbConfig = {
    HOST: process.env.HOST || '',
    USER: process.env.USER || '',
    PASSWORD: process.env.PASSWORD || '',
    DATABASE: process.env.DB || '',
};