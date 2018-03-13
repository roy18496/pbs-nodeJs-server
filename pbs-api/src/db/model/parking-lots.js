import Bookshelf from "../database";

const ParkingLots = Bookshelf.Model.extend({
    tableName: "parking-lots"
});

export default ParkingLots;