const mongoose = require("mongoose");
const Cat = mongoose.model("Cat");

exports.getCats = async (req, res) => {
  try {
    const cat = await Cat.find();
    res.json(cat);
  } catch (e) {
    console.log(e.message);
  }
};

exports.getOneCat = async (req, res) => {
  try {
    console.log(req.params.id);
    const cat = await Cat.findById(req.params.id);
    res.json(cat);
  } catch (e) {
    console.log(e.message);
  }
};

exports.createCat = async (req, res) => {
  try {
    const cat = await Cat.create({
      name: req.body.name,
      bio: req.body.bio,
      imgUrl: req.body.imgUrl,
    });
    res.json(cat);
  } catch (e) {
    console.log(e.message);
  }
};

exports.updateCat = async (req, res) => {
  try {
    const newCatBody = req.body;
    newCatBody.updatedAt = Date.now();
    const updatedCat = await Cat.findOneAndUpdate(
      { _id: req.params.id },
      newCatBody,
      {
        returnDocument: "after",
      }
    );
    res.json(updatedCat);
  } catch (e) {
    console.log(e.message);
  }
};

exports.deleteCat = async (req, res) => {
  try {
    const cat = await Cat.deleteOne({
      _id: req.params.id,
    });
    res.json(cat);
  } catch (e) {
    console.log(e.message);
  }
};
