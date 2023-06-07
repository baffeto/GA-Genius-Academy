

$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 500,
         easing: 'easy',
        infinite: false,
        draggable: true,
         swipe: true,
         touchMove: true,
        centralMode: false,
         variableWidth: true,
         effect: 'slide',
      
         responsive: [
            {
              breakpoint: 1200,
              settings: {
                
                slidesToShow: 3,
                slidesToScroll: 2,
                
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
           
          
          
          
          ]
        
    });

    
    
});


let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
let menuLinks = menu.querySelectorAll(".header__menu-item-href");

burger.addEventListener("click", function(){
    burger.classList.toggle("burger--active");

    menu.classList.toggle("nav--active");

     document.body.classList.toggle("stop-scroll");
}
)

menuLinks.forEach(el => {
el.addEventListener("click",()=>{
    burger.classList.remove("burger--active");

    menu.classList.remove("nav--active");

    document.body.classList.remove("stop-scroll"); 
})

});



window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.data__main__form-input-tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});
