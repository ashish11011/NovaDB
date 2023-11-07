const fiberHistory = require("../models/fiberHistory");
const fiberName = require("../models/fiberName");

async function handelGetAllFiber(req,res){
    const allFibers = await fiberName.find();
    return res.render("index",{allFibers});
}

async function handelAddNewFiber(req,res){
    const body = req.body;
    await fiberName.create({
        name: body.fiberName,
        count: Number("0"),
    });

    await fiberHistory.create({
        name: body.fiberName,
        history: [],
    });

    return res.redirect("/");
}

module.exports = {
    handelGetAllFiber,
    handelAddNewFiber,
}