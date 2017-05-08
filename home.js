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
var Size = document.querySelector('.size');

var TempInstance = Handlebars.compile(MyTemp.innerHTML);

var tempDropInstance = Handlebars.compile(tempDrop.innerHTML);

var SizeDropInstance = Handlebars.compile(tempDrop.innerHTML);
//size.innerHTML = results;

var myshoes=document.querySelector(".myshoes");

var colorF = function(){
  var colorA = uniqColor(shoes);
  Mycolor.innerHTML = tempDropInstance({shoes:colorA});
}
colorF();

var SizeF = function(){
  var SizeA = uniqSize(shoes);
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

function populateDropDown(){

  var colors = uniqColor();
  var sizes = uniqSize();

  var results = tempDropInstance({shoes:colors});
//Size.innerHTML = results;

var result = SizeDropInstance({shoes:sizes})
//myshoes.innerHTML = result;
console.log(colors);
console.log(sizes);
 }

populateDropDown();

//var myshoes=document.querySelector(".myshoes");

// filtering stock
search.addEventListener('click', function(){

var DropColor = Mycolor.value;
var DropSize = size.value;

var EmptyShoe = [];

for (var i = 0; i <shoes.length; i++) {

     var sh = shoes[i];
    var GetSize = (sh.size == DropSize);
    var GetColor = (sh.color == DropColor);
    console.log(GetSize, "size");
    console.log(GetColor, "Colour");
if(GetColor && GetSize){
  // sh.image = shoes[i].image;
  console.log(sh);
  EmptyShoe.push(sh);
}
myshoes.innerHTML = TempInstance({shoes: EmptyShoe});
}
})

// displaying all stock
allbtn.addEventListener('click',  function(){

  var searchResults = TempInstance({shoes: shoes})
  myshoes.innerHTML = searchResults
});

// creating a function for login Menu
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
// add stock
var stockMap = {};
enter.addEventListener('click', function(){

  var Brand = document.querySelector('.brandName');
  var Size  = document.querySelector('.sizeName');
  var Color = document.querySelector('.ColorName');
  var Stock = document.querySelector('.stockName');
  var Price = document.querySelector('.PriceName');
  var Image = document.querySelector('#myFileInput');

var brandName = Brand.value;

if(!brandName == ''){
  var names = stockMap[brandName];
  if(names == undefined){
    names ={
      brand : Brand.value,
      size : Size.value,
      color : Color.value,
      Stock : Stock.value,
      price : Price.value,
      image : Image.value.substring(12)
    };

    // clearing all text-fields after adding
    Brand.value = '';
    Size.value = '';
    Color.value = '';
    Stock.value = '';
    Price.value = '';
    Image.value = '';

    shoes.push(names);
stockMap[brandName] = names;
}
else{
  names.Stock += (Stock.value)
}
}

var searchResults = TempInstance({shoes : shoes})
myshoes.innerHTML = searchResults;

//populateDropDown();
colorF();
SizeF();
})
btn.addEventListener('click', loginD);
