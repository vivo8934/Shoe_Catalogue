var MyTemp = document.querySelector('.Template');
var search = document.querySelector('.myBtn');
var allbtn = document.querySelector('.allbtn');
var size = document.querySelector('.DSize');
var Mycolor = document.querySelector('.myColor');
var myBrand = document.querySelector('.Dbrand');
var brand = document.querySelector('.brand');
var tempDrop = document.querySelector('.TemplateDrop');
var SizeDrop = document.querySelector('.SizeDrop');
var username = document.querySelector('.username');
var password = document.querySelector('.pass');
var btn = document.querySelector('.btn');
var input = document.querySelector('.inputs');
var login = document.querySelector('.login');
var enter = document.querySelector('.enter');


var TempInstance = Handlebars.compile(MyTemp.innerHTML);

var tempDropInstance = Handlebars.compile(tempDrop.innerHTML);

var SizeDropInstance = Handlebars.compile(tempDrop.innerHTML);
//size.innerHTML = results;

var myshoes=document.querySelector(".myshoes");

var colorA = uniqColor(shoes);
var colorF = function(){
  Mycolor.innerHTML = tempDropInstance({shoes:colorA});
}
colorF();

var SizeA = uniqSize(shoes);
var SizeF = function(){
size.innerHTML = SizeDropInstance({shoes: SizeA});
}
SizeF();

function uniqColor(){
var colors = [];
var colorMap = {};

for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  if(colorMap[shoe.color] === undefined){
    colorMap[shoe.color] = shoe.color;
    colors.push(shoe.color);
  }
}
return colors;
};

function uniqSize(){
var sizeMap = {};
var size = [];
for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  if(sizeMap[shoe.size] === undefined){
    sizeMap[shoe.size] = shoe.size;
    size.push(shoe.size);


  }
}
return size;
};
var saveShoe = [];


var myshoes=document.querySelector(".myshoes");

allbtn.addEventListener('click',  function(){

  var shoesL = [];
  for (var i = 0; i < shoes.length; i++) {

    var sh = shoes[i];

    var colorM = sh.color
    shoesL.push(sh);
    myshoes.innerHTML = TempInstance({shoes: shoesL})
  }

});
var loginD = function() {
  var user = 'vivo8934';
  var pword = 'mfundo8934';

  var aUser = username.value;
  var aPass = password.value;


  if (aUser === user && aPass === pword) {
    login.style.display = 'none';
    input.style.display = 'block';
  } else {
    input.style.display = 'none';
    login.style.display = 'block';

    alert('Please enter correct password or username');
  }
}
btn.addEventListener('click', loginD);
