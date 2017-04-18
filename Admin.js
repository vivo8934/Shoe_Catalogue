var username = document.querySelector('.username');
var password = document.querySelector('.pass');
var btn = document.querySelector('.btn');
var input = document.querySelector('.inputs');
var login = document.querySelector('.login');


var loginD = function() {
  var user = 'vivo8934';
  var pword = 'mfundo8934';

var aUser = username.value;
var aPass = password.value;


if(aUser === user && aPass === pword){
login.style.display = 'none';
input.style.display = 'block';
}
else {
  input.style.display = 'none';
  login.style.display = 'block';
  alert('Please enter correct password or username')
}
}
btn.addEventListener('click', loginD);
