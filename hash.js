const CryptoJS = require("crypto-js");

function hashIt(message, hash) {
  var hash = CryptoJS.SHA256(message.concat(hash))
  return hash.toString();
}

function randomStr(m) {
  if (m < 9) {
    m = 9;
  }
  var s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz:;_-/?<>!@#$%^()~|[]{}\"\'\\+=';
  for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
  return s;
};

function randomSalt() {
  return randomStr(Math.floor(Math.random()*50) )
}

