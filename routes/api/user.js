const express = require("express");
const router = express.Router();
const userCtrl = require("../../controllers/api/users");

router.post("/", userCtrl.create);

module.exports = router;
