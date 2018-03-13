import Bookshelf from "../database";

const Clients = Bookshelf.Model.extend({
    tableName: "client"
});

export default Clients;