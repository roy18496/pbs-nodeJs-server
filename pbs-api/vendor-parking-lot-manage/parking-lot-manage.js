var db = require("../connectiondb");

var ParkingLot = {
    getAllParkingLot: function(callback){
        return db.query("select * from parking_lots",callback)
    },

    getParkingLotById: function(id, callback){
        return db.query("select * from parking_lots where parkinglot_id=?",[id],callback)
    }
};

module.exports = ParkingLot;