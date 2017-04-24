var username = document.querySelector('.username');
var password = document.querySelector('.pass');
var btn = document.querySelector('.btn');
var input = document.querySelector('.inputs');
var login = document.querySelector('.login');
var enter = document.querySelector('.enter');

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
    password.value = '';
    username.value = '';
    alert('Please enter correct password or username');
  }
}
btn.addEventListener('click', loginD);

var stockMap = {}
enter.addEventListener('click', function() {
      var myshoes = document.querySelector(".myshoes");

      var Brand = document.querySelector('.brandName');
      var Size = document.querySelector('.sizeName');
      var Color = document.querySelector('.ColorName');
      var Stock = document.querySelector('.stockName');
      var Price = document.querySelector('.PriceName');
      var Image = document.querySelector('.myFileInput');
      var MyTemp = document.querySelector('.Template');
      var myshoes = document.querySelector(".myshoes");

      var Brandnames = Brand.value;

      if (!Brandnames == '') {
        var names = stockMap[Brandnames];
        if (names == undefined) {
          names = {
            brand: Brand.value,
            size: Size.value,
            color: Color.value,
            stock: Stock.value,
            price: Price.value,
            image: Image.value
          };
          shoes.push(names);
          stockMap[Brandnames] = names;
        } else {
          names.stock += Stock.value;
        }

        var searchResults = TempInstance({
          shoes: shoes
        })
        myshoes.innerHTML = searchResults;
}
      });
