const asyncHandler = require("express-async-handler");
const Driver = require("../models/driver");

class DriversController {
  save = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const isExists = await Driver.findOne({ email });

    if (isExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const newDriver = await Driver({ ...req.body });
    if (!newDriver) {
      res.status(400);
      throw new Error("Bad request");
    }

    await newDriver.save();
    res.status(201).json({
      code: 201,
      data: newDriver,
    });
  });

  getAll = asyncHandler(async (req, res) => {
    res.send("getAll");
  });

  getOne = asyncHandler(async (req, res) => {
    res.send("getOne");
  });

  update = asyncHandler(async (req, res) => {
    res.send("update");
  });

  remove = asyncHandler(async (req, res) => {
    res.send("remove");
  });
}

module.exports = new DriversController();
