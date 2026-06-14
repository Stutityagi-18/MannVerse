const Gratitude = require("../models/Gratitude");

const createGratitude = async (req, res) => {
  try {
    const { thing1, thing2, thing3 } = req.body;

    const gratitude = await Gratitude.create({
      userId: req.user.id,
      thing1,
      thing2,
      thing3,
    });

    res.status(201).json({
      success: true,
      gratitude,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyGratitudes = async (req, res) => {
  try {
    const gratitudes = await Gratitude.find({
      userId: req.user.id,
    });

    res.json(gratitudes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createGratitude,
  getMyGratitudes,
};