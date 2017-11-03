const mysql = require('mysql');
const express = require('express');
const bodyParse = require('body-parser');
const fallback = require('express-history-api-fallback');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var {insertMember, selectMember, loginChecked, getMsg, newMsg, chgMsg} = require('./query.js')

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackconfig = require('./webpack.config.js');

var app = express();

var compiler = webpack(webpackconfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackconfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.use(bodyParse.json());

var con = mysql.createConnection({
  host: 'localhost',
  user: 'kkk123456',
  password: 'kkk654321',
  database: 'kkk123456'
});

con.connect();

var brianHash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err){
          reject(err);
        }
        resolve(hash);
      })
    })
  })
};

time = () => {
    var a = Date();
    var [ , mon, dd, yy, time] = a.split(' ', 5);
    var mon_array = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    switch (mon) {
      case mon_array[0]:
        mm = "01"
        break;
      case mon_array[1]:
        mm = "02"
        break;
      case mon_array[2]:
        mm = "03"
        break;
      case mon_array[3]:
        mm = "04"
        break;
      case mon_array[4]:
        mm = "05"
        break;
      case mon_array[5]:
        mm = "06"
        break;
      case mon_array[6]:
        mm = "07"
        break;
      case mon_array[7]:
        mm = "08"
        break;
      case mon_array[8]:
        mm = "09"
        break;
      case mon_array[9]:
        mm = "10"
        break;
      case mon_array[10]:
        mm = "11"
        break;
      case mon_array[11]:
        mm = "12"
        break;
    }
    var newTime = yy+"."+mm+"."+dd+" "+time;
    return newTime;
}

var a = 1;
app.post('/signUp/send', (req, res) => {
  var b = Date().replace(/ /g, "").replace(/:/g, "");
  var c = b.substring(3, 12);
  var c2 = b.substring(12, 18);
  var id = "DA" + c + "ti" + c2 + "Bri0000" + a;
  a++;
  var data = req.body;
  var token = jwt.sign(data.userName, 'brian');
  brianHash(data.password).then((result) => {
    var values = [
      [id ,data.userName, data.name, result, data.phone, data.email, data.identity, token]
    ];
    return insertMember(values);
  }).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
    res.status(404).send(err);
  })
})

app.post('/t', (req, res) => {
  var a = time();
  res.send(a);
})

app.post('/login', (req, res) => {
  var data = req.body;
  selectMember(data.userName, data.password).then((result) => {
    res.send(result);
  }).catch((err) => {
    res.status(404).send(err);
  })
})

app.post('/loginCheck', (req, res) => {
  var token = req.body.token;
  loginChecked(token).then((result) => {
    res.send(result);
  }).catch((err) => {
    res.status(404).send(err);
  })
})

app.get('/selectMessageBoard', (req, res) => {
  getMsg().then((result) => {
    res.send(result);
  }).catch((err) => {
    res.status(404).send(err);
  })
})

app.post('/newMsg', (req, res) => {
  var data = req.body;
  var ttt = time();
  var sendData = [
    [data.name, data.title, data.content, data.identity, ttt]
  ];
  newMsg(sendData).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
    res.status(404).send(err);
  })
})

app.post('/chgMsg', (req, res) => {
  var data = req.body;
  chgMsg({title: data.title, content: data.content, id: data.id}).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
    res.status(404).send(err);
  })
})

app.use(express.static(__dirname));

app.use(fallback('index.html', {root: __dirname}));

app.listen(3000, ()=> {
  console.log('start on 3000 port');
})
