var express = require('express');
var router = express.Router();
var khoahoc = require('../models/khoahoc');

/* GET home page. */
router.get('/', function (req, res, next) {
  khoahoc.find({}, (err, data) => {
    res.render('index', {
      data: data
    });
  })
});
//  --  //
router.get('/index', function (req, res, next) {
  khoahoc.find({}, (err, data) => {
    res.render('index', {
      data: data
    });
  })
});
/* GET home page. */



/* GET detail page. */
router.get('/detail', function (req, res, next) {
  res.render('detail', {
    title: 'Express'
  });
});
router.get('/detail.:idsp', function (req, res, next) {
  var idsp = req.params.idsp;
  if (!req.session.seen_sp) {
    req.session.seen_sp = [];
  }
  if (req.session.seen_sp.indexOf(idsp) == -1) {
    req.session.seen_sp.push(idsp);
  }

  khoahoc.findById(idsp, (err, data) => {
    res.render('detail', {
      data: data
    })
  })
});

router.get('/seen', (req, res) => {
  if (!req.session.seen_sp) {
    res.send("Chua co du lieu ban oi!!!")
  }
  khoahoc.find({}, (err, data) => {
    res.render('seen', {
      seen_id: req.session.seen_sp,
      data: data
    });
  })
})


module.exports = router;