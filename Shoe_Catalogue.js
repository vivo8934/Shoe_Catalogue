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
var color = document.querySelector('.color');
var size = document.querySelector('.DSize');
var Mycolor = document.querySelector('.myColor');

var TempInstance = Handlebars.compile(MyTemp.innerHTML);
var myshoes=document.querySelector(".myshoes");

search.addEventListener('click',  function(){
  var colorChoosed = Mycolor.value;
  var sizeChoosed = size.value;
  var shoesL = [];

  for (var i = 0; i < shoes.length; i++) {
    var sh = shoes[i];
    var colorMatches = (sh.color == colorChoosed || colorChoosed == 'all');
    var sizeMatches = (sh.size == sizeChoosed || sizeChoosed == 'all');
    if(colorMatches && sizeMatches){
      shoesL.push(sh);
    }
    myshoes.innerHTML = TempInstance({shoes: shoesL})
  }

});
