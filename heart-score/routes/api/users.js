var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/drinks/:user', function (req, res, next) {
    var user_drinks = {
        user_id: req.params.user,
        drinks: [
            {
                name: "beer",
                units: 2
            },
            {
                name: "wine",
                units: 1
            },
            {
                name: "spirit",
                units: 0
            },
            {
                name: "strong_spirit",
                units: 3
            }
        ]
    };

    res.send(user_drinks);
});

module.exports = router;
