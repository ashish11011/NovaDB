const express = require("express");
const { 
    handelAddNewFiber,
    handelGetAllFiber,
 } = require("../controllers/staticRouter");

const router = express.Router();

router.route("/")
.get(handelGetAllFiber)
.post(handelAddNewFiber);

module.exports = router;