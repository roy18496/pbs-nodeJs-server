import Bookshelf from "bookshelf";
import knex from "knex";

const knexConfig = knex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "pbs_dev",
        charset: "utf8"
    },
    pool: {
        min: 0,
        max: 7
    }
});

export default Bookshelf(knexConfig);