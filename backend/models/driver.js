const { Schema, model } = require("mongoose");

const driverSchema = Schema(
  {
    name: String,
    email: String,
    password: String,
    photo: String,
    team: String,
    country: String,
    podiums: Number,
    points: Number,
    worldChampionships: Number,
  },
  { versionKey: false, timestamps: true }
);

const Driver = model("driver", driverSchema);

module.exports = Driver;
