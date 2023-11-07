const fiberName = require("../models/fiberName");
const fiberHistory = require("../models/fiberHistory");


async function handleRedirectFiberHistory(req,res){
    const body = req.body;
    // console.log("Get Request body is: ",body);
    // return res.redirect(`/history/${body.fiberName}`);
    const fiberDetail = await fiberHistory.findOne({name:body.fiberName});
    console.log( "The data of history" + fiberDetail);
    return res.render("details",fiberDetail);
}

async function handleGetFiberHistory(req,res){
    const name = req.params.fiberName;
    const fiberDetail = await fiberHistory.findOne({name:name});
    // console.log( "The data of history" + fiberDetail);
    return res.render("details",fiberDetail);
}

async function handleCreateFiberHistory(req,res){
    const name = req.params.fiberName;
    const description = req.body.description;
    const increaseCount = req.body.count;
    // console.log("History item request" + name + description + increaseCount);
    await fiberName.updateOne({name:name},{
        $inc: {count: increaseCount}
    });

    await fiberHistory.updateOne({name:name},{
        $push: {
            history:{
                description,
                count:increaseCount,
                time: Date.now(),
            }
        }
    });
    return res.redirect(`/history/${name}`);
}

module.exports = {
    handleRedirectFiberHistory,
    handleGetFiberHistory,
    handleCreateFiberHistory,
}