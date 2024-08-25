var menubtn = document.querySelector("#nav a i");
var cross = document.querySelector(".cross a i");
var menu = document.querySelector(".menu")


    var tl = gsap.timeline();

    tl.to(".menu", {
        right: 0,
        duration: 0.8,
        opacity: 1,
        
    })
    tl.from(".menu li", {
        x: 100,
        duration: 0.8,
        stagger: 0.2,
        opacity: 0
    })


tl.pause();

menubtn.addEventListener("click", function () {
    tl.play();

})
cross.addEventListener("click", function () {
    tl.reverse();
})