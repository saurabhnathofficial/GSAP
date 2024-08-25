var initialPath = `M 10 100 Q 500 100 990 100`
var finalePath = `M 10 100 Q 500 100 990 100`

var anime = document.querySelector(".anime");

anime.addEventListener("mouseenter", function (dts) {

    initialPath = `M 10 100 Q ${dts.x} ${dts.y} 990 100`
    
    gsap.to("svg path", {
        attr:{d: initialPath},
        duration: 0.3,
        ease:"powe3.out"    
    })
})
anime.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalePath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})