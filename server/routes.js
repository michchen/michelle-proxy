const router = require('express').Router();
const proxy = require('express-http-proxy');
const dotenv = require('dotenv');

const REVIEWSPORT = process.env.REVIEWSPORT || 3030;

router.get('/loaderio-5951fb85517e614dba90dca04e1e2fe9', (req, res) => {
  res.send('loaderio-5951fb85517e614dba90dca04e1e2fe9');
});

router.use('/sidebar', proxy('http://ec2-18-234-26-142.compute-1.amazonaws.com/'));
router.use('/photos', proxy('http://ec2-18-212-199-79.compute-1.amazonaws.com/'));

router.get('/reviews/:id', proxy(`http://ec2-54-152-110-129.compute-1.amazonaws.com:${REVIEWSPORT}/`,
  {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    }
  }
));

router.get('/reviews/:id', proxy(`http://ec2-54-152-110-129.compute-1.amazonaws.com:${REVIEWSPORT}/`,
  {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    }
  }
));

router.get('/reviews/:id', proxy(`http://ec2-54-152-110-129.compute-1.amazonaws.com:${REVIEWSPORT}/`,
//router.post('/review/:id', proxy('http://ec2-54-152-110-129.compute-1.amazonaws.com:3002/',
  {
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    }
  }
));


router.use('/header', proxy('http://ec2-18-232-101-230.compute-1.amazonaws.com/'));

module.exports = router;
