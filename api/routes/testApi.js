var express = require("express");
var router = express.Router();

/* GET. */
router.get("/test", function (req, res, next) {
  res.send({ data: [1, 2, 3] });
});

module.exports = router;
