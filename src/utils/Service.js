import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ServicesScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.add("same-time-pin");
    const ServicePinArea = gsap.context(() => {
      tl.to(
        ".service-back-container",
        {
          width: "100%",
          duration: 2,
          height: "100%",
          borderRadius: 0,
          scrollTrigger: {
            trigger: ".Service-section",
            scroller: "body",
            start: "top",
            scrub: 3,
            end: "350%",
            pin: true,
          },
        },
        "same-time-pin"
      )
        .to(
          ".service-front-container .circle1",
          {
            duration: 0.5,
            border: "1.5px solid white",
            scrollTrigger: {
              trigger: ".Service-section",
              start: "top",
              scrub: 2,
              end: "bottom",
              scroller: "body",
              // markers: true,
            },
          },
          "same-time-pin"
        )
        .to(
          ".service-front-container .circle1 .circle2",
          {
            duration: 0.5,
            rotate: "90deg",
            border: "2px dashed white",
            scrollTrigger: {
              trigger: ".Service-section",
              scroller: "body",
              start: "top",
              scrub: 3,
              end: "bottom",
              // markers:true
            },
          },
          "same-time-pin"
        )
        .to(
          ".service-front-container .circle1 .circle2 .circle3",
          {
            duration: 0.5,
            transform: "rotate(90deg)",
            border: "1px dashed white",
            scrollTrigger: {
              trigger: ".Service-section",
              scroller: "body",
              start: "top",
              scrub: 3,
              end: "bottom",
              // markers:true
            },
          },
          "same-time-pin"
        )
        .to(
          ".service-front-container",
          {
            duration: 4,
            delay:2,
            opacity: 0.9,
            backgroundColor: "#161324",
            scrollTrigger: {
              trigger: ".Service-section",
              scroller: "body",
              start: "top",
              scrub: 3,
              end: "bottom",
              // markers:true
            },
          },
          "same-time-pin"
        );
    });
    const circlePin = gsap.context(() => {
      tl.to(
        ".service-front-container .circle1 .circle2 .circle3 .circle4",
        {
          duration: 0.3,
          width: "90%",
          height: "90%",
          border: "1px solid white",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "100% top",
            end: "180%",
            scrub: 2,
            // markers:true
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(
        ".service-front-container .circle1 .circle2 .circle3 .circle4 .circle5",
        {
          duration: 0.5,
          width: "90%",
          height: "90%",
          border: "1px solid white",
          transform :"rotate(90deg)",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "100% top",
            end: "180%",
            scrub: 2,
            // markers:true,
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(
        ".service-front-container .circle1 .circle2 .circle3 .circle4 .circle5 .circle6",
        {
          duration: 0.5,
          width: "90%",
          height: "90%",
          borderRadius: "50%",
          border: "1px solid white",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "100% top",
            end: "180%",
            scrub: 2,
            // markers:true,
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(
        ".service-front-container .circle1",
        {
          width: "45%",
          height: "90%",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "100% top",
            end: "180%",
            scrub: 2,
            // markers:true,
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(
        ".service-front-container .circle1 .circle2",
        {
          width: "90%",
          height: "95%",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "100% top",
            end: "180%",
            scrub: 2,
            // markers:true,
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(
        ".service-front-container .circle1 .circle2 .circle3",
        {
          width: "92%",     
          height: "90%",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "100% top",
            end: "180%",
            scrub: 2,
            // markers:true,
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(
        ".service-front-container .Service-box-container p",
        {
          fontSize:"60px",
          fontWeight:"500",
          color:"white",
          transform: "translateZ(120px)perspective(400px)",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "190% top",
            end: "210%",
            scrub: 2,
            // markers:true,
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(
        ".service-front-container .Service-box-container p",
        {
          opacity:0,
          duration:2,
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "215% top",
            end: "230%",
            scrub: 2,
            // markers:true,
            // pin: true,
          },
        },
        "same-time-pin"
      )
      .to(".service-front-container .Service-box-container h1", {
        fontSize:"50px",
          fontWeight:"500",
          color:"white",
          transform: "translateZ(120px)perspective(400px)",
          scrollTrigger: {
            trigger: ".service-front-container",
            scroller: "body",
            start: "270% top",
            end: "300%",
            scrub: 2,
            // markers:true
      }
    })
    });
    const dotsPin =  gsap.context(()=>{
      tl.to("html", {"--dots-color": "white", duration: 0.5,
      "--dots-width" : "15px",
      "--dots-height" : "15px",
      scrollTrigger:{
        trigger:".circle-container",
        scroller:"body", 
        start:"180% top",
        end:"220%",
        scrub:2,
        // markers:`true
      }});
        
    });
    const dotsRotatePin = gsap.context(()=>{
      tl.add("same-time-dots-rotate")
      .to(".service-front-container .circle1", {
       transform:"rotate(140deg)",
       duration:2,
        scrollTrigger:{
          trigger:".Service-box-container",
          start:"240% top",
          end:"300%",
          scrub:3,
          scroller:"body",
          // markers:true,
        },
        }, 'same-time-dots-rotate')
      .to(".service-front-container .circle1 .circle2", {
         transform:"rotate(170deg)",
         duration:2.5,
          scrollTrigger:{
            trigger:".Service-box-container",
            start:"240% top",
            end:"300%",
            scrub:5,
            scroller:"body",
            // markers:true,
      
          },
          }, 'same-time-dots-rotate')
       .to(".service-front-container .circle1 .circle2 .circle3 ", {
           transform:"rotate(140deg)",
           duration:3,
            scrollTrigger:{
              trigger:".Service-box-container",
              start:"240% top",
              end:"300%",
              scrub:5,
              scroller:"body",
              // markers:true,
            
            },
            }, 'same-time-dots-rotate')
       .to(".service-front-container .circle1 .circle2 .circle3 .circle4", {
           transform:"rotate(60deg)",
           duration:3,
            scrollTrigger:{
              trigger:".Service-box-container",
              start:"240% top",
              end:"300%",
              scrub:5,
              scroller:"body",
              // markers:true,
            
            },
            }, 'same-time-dots-rotate')
       .to(".service-front-container .circle1 .circle2 .circle3 .circle4 .circle5", {
           transform:"rotate(160deg)",
           duration:3,
            scrollTrigger:{
              trigger:".Service-box-container",
              start:"240% top",
              end:"300%",
              scrub:5,
              scroller:"body",
              // markers:true,
            
            },
            }, 'same-time-dots-rotate')
       .to(".service-front-container .circle1 .circle2 .circle3 .circle4 .circle5 .circle6", {
           transform:"rotate(70deg)",
           duration:3,
            scrollTrigger:{
              trigger:".Service-box-container",
              start:"240% top",
              end:"300%",
              scrub:5,
              scroller:"body",
              // markers:true,
            
            },
            }, 'same-time-dots-rotate')

    })
    const ServiceBoxesPin = gsap.context(()=>{
      tl.to(".service-front-container .Service-box-container #Service-box-1", {
        width:"300px",
        height:"150px",
        x:-50,
        y:-280,
        duration:1,
        scrollTrigger:{
          trigger: ".Service-box-container",
          start:"230%",
          end:"240%",
          scrub:3,
          scroller:"body",
        //  markers:true
        }

      })
      .to(".service-front-container .Service-box-container #Service-box-2", {
        width:"300px",
        height:"150px",
        x:360,
        y:-250,
        duration:1,
        scrollTrigger:{
          trigger: ".Service-box-container",
          start:"240%",
          end:"250%",
          scrub:3,
          scroller:"body",
          // markers:true

        }

      })
      .to(".service-front-container .Service-box-container #Service-box-3", {
        width:"300px",
        height:"150px",
        x:440,
        y:10,
        duration:1,
        scrollTrigger:{
          trigger: ".Service-box-container",
          start:"250%",
          end:"260%",
          scrub:3,
          scroller:"body",
          // markers:true

        }

      })
      .to(".service-front-container .Service-box-container #Service-box-4", {
        width:"300px",
        height:"150px",
        x:285,
        y:250,
        duration:1,
        scrollTrigger:{
          trigger: ".Service-box-container",
          start:"260%",
          end:"270%",
          scrub:3,
          scroller:"body",
          // markers:true

        }
      })
      .to(".service-front-container .Service-box-container #Service-box-5", {
        width:"300px",
        height:"150px",  
        x:-288,
      y:200,
        duration:1,
        scrollTrigger:{
          trigger: ".Service-box-container",
          start:"270%",
          end:"280%",
          scrub:3,
          scroller:"body",
          // markers:true

        }

      })
      .to(".service-front-container .Service-box-container #Service-box-6", {
        width:"300px",
        height:"150px",
        x:-368,
        y:-50,
        
        duration:1,
        scrollTrigger:{
          trigger: ".Service-box-container",
          start:"280%",
          end:"290%",
          scrub:3,
          scroller:"body",
          // markers:true

        }

      })

    })

    return () => [ServicePinArea.revert(), circlePin.revert(),
    dotsPin.revert(),
    dotsRotatePin.revert(),
    ServiceBoxesPin.revert()
    ];
  }, []);
};
export default ServicesScrollAnimation;
