const express = require("express");
const {
    handleCreateFiberHistory,
    handleRedirectFiberHistory,
    handleGetFiberHistory,
} = require("../controllers/history")

const router = express.Router();


router.post("/",handleRedirectFiberHistory);

router.route("/:fiberName")
.get(handleGetFiberHistory)
.post(handleCreateFiberHistory);


module.exports = router;