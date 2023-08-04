const mongoose = require("mongoose");

const HouseSchema = mongoose.Schema({
    title: { type: String, required: true },
    contact:{type: Number, required: true},
    province: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    sale_or_rent: { type: String, required: true },
    price: { type: Number, required: true },
    bedroomNumber: { type: Number, required: true },
    bathroomNumber: { type: Number, required: true },
    garages: { type: Number, required: true },
    pool: { type: Boolean, required: true },
    petFriendly: { type: Boolean, required: true },
    houseImage: { type: String, required: false },
 
});

const House = mongoose.model("House", HouseSchema);

module.exports = House;
