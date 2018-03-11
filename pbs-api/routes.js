var express = require ("express");
var router = express.Router();
var ParkingLot = require("./vendor-parking-lot-manage/parking-lot-manage");

router.get('/:id?', function(request, response, next){
    if (request.params.id){
        ParkingLot.getParkingLotById(request.params.id, function(err,rows){
            if (err){
                response.json(err);
            }
            else{
                response.json(rows);
            }
        });
    }
    else{
        ParkingLot.getAllParkingLot(function(err,rows){
            if(err){
                response.json(err);
            }
            else{
                response.json(rows);
            }
        });
    }
});

module.exports = router;