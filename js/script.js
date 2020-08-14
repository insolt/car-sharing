const header = document.querySelector(".header");
//const hero = document.querySelector(".hero");

window.addEventListener("scroll", function() {
    if (window.scrollY < 200) {
        header.classList.remove("header--sticky");
    } else {
        header.classList.add("header--sticky");
    }
    //hero.backgroundPositionY = -(window.scrollY * 0.2) + "px";
})