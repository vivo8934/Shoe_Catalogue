(function() {
  function Slideshow(element) {
    this.el = document.querySelector(element);
    this.init();
  }
  Slideshow.prototype = {
    init: function() {
      this.wrapper = this.el.querySelector(".slide-onGo");
      this.slides = this.el.querySelectorAll(".slide");
      this.previous = this.el.querySelector(".slider-previous");
      this.next = this.el.querySelector(".slider-next");
      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;
      this.action();
      this.stopStart();
    },
    _slideTo: function(slide) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;
      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides[i];
        if (slide !== currentSlide) {
          slide.style.opacity = 0;
        }
      }
    },
    action: function() {
      var self = this;
      self.timer = setInterval(function() {
        self.index++;
        if (self.index == self.slides.length) {
          self.index = 0;
        }
        self._slideTo(self.index);
      }, 3000);
    },
    stopStart: function() {
      var self = this;
      self.el.addEventListener("mouseover", function() {
        clearInterval(self.timer);
        self.timer = null;
      }, false);
      self.el.addEventListener("mouseout", function() {
        self.action();
      }, false);
    }
  };
  document.addEventListener("DOMContentLoaded", function() {
    var slider = new Slideshow("#big-slide");
  });
})();

var MyTemp = document.querySelector('.Template');
var search = document.querySelector('.myBtn');
var allbtn = document.querySelector('.allbtn');
var size = document.querySelector('.DSize');
var Mycolor = document.querySelector('.myColor');
var myBrand = document.querySelector('.Dbrand');
var brand = document.querySelector('.brand');
var tempDrop = document.querySelector('.TemplateDrop');
var SizeDrop = document.querySelector('.SizeDrop');

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
