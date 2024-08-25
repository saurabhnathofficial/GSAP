var img = document.querySelector("#main img")
var cursor = document.querySelector("#cursor")



document.addEventListener("mousemove",function(e){
    gsap.to("#cursor",{
        x: e.x,
        y: e.y,
        
    })
})

img.addEventListener("mouseenter",function(e){
    gsap.to("#cursor",{
        scale:2
    })
})
img.addEventListener("mouseleave",function(e){
    gsap.to("#cursor",{
        scale:1
    })
})