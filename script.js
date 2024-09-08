function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    duration:.8,
    stagger:.2
})

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:.4
})

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:.5
})

tl.from(".center-part1 button",{
    x:-100,
    opacity:0,
    duration:.4
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:.8,
    delay:0.7,
    x:200
},"-=1")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
})
}
 page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"top -90%",
        scrub:2,
    }
})
tl2.from(".services h3",{
    x:-100,
    opacity:0,
    duration:0.5,
})
tl2.from(".services p",{
    y:20,
    opacity:0,
    duration:0.5,
})
tl2.from(".elem.line1.left",{
    x:-200,
    opacity:0,
    duration:0.6,
},"left")
tl2.from(".elem.line1.right",{
    x:200,
    opacity:0,
    duration:0.6
},"left")
tl2.from(".elem.line2.left",{
    y:-200,
    opacity:0,
    duration:0.6
},"right")
tl2.from(".elem.line2.right",{
    y:200,
    opacity:0,
    duration:0.6
},"right")
tl2.from(".elem.line3.left",{
    x:-200,
    opacity:0,
    duration:0.6,
},"left2")
tl2.from(".elem.line3.right",{
    x:200,
    opacity:0,
    duration:0.6
},"left2")
tl2.from(".elem.line4.left",{
    y:-200,
    opacity:0,
    duration:0.6
},"right2")
tl2.from(".elem.line4.right",{
    y:200,
    opacity:0,
    duration:0.6
},"right2")