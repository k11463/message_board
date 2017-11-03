const mysql = require('mysql');
const bcrypt = require('bcryptjs')

var con = mysql.createConnection({
  host: '59.126.12.47',
  user: 'kkk123456',
  password: 'kkk654321',
  database: 'kkk123456'
});

con.connect();

const insertMember = (values) => {
  return new Promise((resolve, reject) => {
    con.query(`INSERT INTO member (member_id, user, name, password, phone, email, identity, token) VALUES ?`, [values], (err, res) => {
      if (err){
        reject(err);
      }
      resolve(res);
    })
  })
}

const selectMember = (userName, password) => {
  return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM member WHERE user = '${userName}'`, (err, res) => {
        if (err){
          reject(err);
        }
        else if (res.length == 0){
          reject('沒有此用戶!');
        }
        else{
          bcrypt.compare(password, res[0].password, (err, result) => {
            if (err){
              reject('密碼錯誤!');
            }
            resolve(res);
          })
        }
      })
  })
}

const loginChecked = (token) => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM member WHERE token = '${token}'`, (err, res) => {
      if (err){
        reject(err);
      }
      else{
        resolve(res);
      }
    })
  })
}

const getMsg = () => {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM message`, (err, res) => {
      if (err){
        reject(err);
      }
      resolve(res);
    })
  })
}

const newMsg = (values) => {
  return new Promise((resolve, reject) => {
    con.query(`INSERT INTO message (msg_name, msg_title, msg_content, msg_identity, msg_time) VALUES ?`, [values], (err, res) => {
      if (err){
        reject(err);
      }
      resolve(res);
    })
  })
}

const chgMsg = (value) => {
  return new Promise((resolve, reject) => {
    con.query(`UPDATE message SET msg_title = '${value.title}', msg_content = '${value.content}' WHERE msg_id = '${value.id}'`, (err, res) => {
      if (err){
        reject(err);
      }
      resolve(res);
    })
  })
}

module.exports = {
  insertMember,
  selectMember,
  loginChecked,
  getMsg,
  newMsg,
  chgMsg,
}
