var username = document.querySelector('.username');
var password = document.querySelector('.pass')
var btn = document.querySelector('.btn')
var input = document.querySelector('.inputs')



var loginD = function() {
  var user = 'vivo8934';
  var pword = 'mfundo8934';

var aUser = username.value;
var aPass = password.value;


if(aUser === user && aPass === pword){
input.style.display = 'block';
input.innerHTML = input.innerHTML;
}
else {
  input.style.display = 'none';
  alert('Please enter correct password or username')
}
}
btn.addEventListener('click', loginD);
