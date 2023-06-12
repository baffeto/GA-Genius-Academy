
console.log("Hello World!");

let burger = document.querySelector(".burger");
let menu = document.querySelector(".burger__nav");
let menuLinks = menu.querySelectorAll(".header__menu-items-link");

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

})