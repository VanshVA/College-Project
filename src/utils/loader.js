import gsap from "gsap";
gsap.registerPlugin(useGSAP);
import { useGSAP } from "@gsap/react";
// import NavbarAnimation from "./Navbar";
function LoaderAnimation(isLoading) {
  const BeforeCompleteLoading = useGSAP(() => {
    const tl1 = gsap.timeline();
    //before counter complete animation
    tl1
      .from(".loader-container .main-loader .upper-img-container", {
        x: -900,
        duration: 0.8,
        opacity: 0,
      })
      .to(".loader-container .main-loader .mid-counter", {
        scale: 1,
        duration: 0.8,
      })
      .from(".loader-container .main-loader .lower-img-container", {
        duration: 0.8,
        x: 200,
        opacity: 0,
        duration: 0.7,
      });
  }, []);

  const AfterCompleteLoading = useGSAP(() => {
    if (isLoading >= 100) {
      //after counting are completed this start
      const tl2 = gsap.timeline({ defaults: "duration:0.9" });
      tl2
        .to(".loader-container .main-loader .mid-counter", {
          scale: 0,
        })
        .to(".loader-container .upper-img-container>img", {
          transform: "translateX(630px)",
        })
        .to(".loader-container .upper-img-container>img", {
          transform: "translateX(630px)translateY(50px)",
        })
        .to(".loader-container .lower-img-container>img", {
          transform: "translateY(-50px)",
        })
        
        .to(".loader-container .upper-img-container>img", {
          opacity: 0,
        })
        .to(".loader-container .lower-img-container>img", {
          opacity: 0,
        })
        .to(".loader-container .main-loader", {
          duration: 0.2,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(5px)",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        })
        .to(".Background-Blur ", {
          direction: 0.5,
          opacity: 1,
        })
        .to(".home-Iamges .home-image-1", {
          direction: 2,
          // scale:0.8,
          opacity: 1,
        })
        .to(".home-Iamges .home-image-2", {
          direction: 2,
          opacity: 1,
          // scale:0.8,
        })
        .to(".navbar-main", {
          opacity: 1,
          duration: 0.9,
        })
        .to(".home-title", {
          opacity: 1,
          duration: 0.4,
        })
        .to(".home-title img", {
          opacity: 1,
          duration: 0.4,
          scale: 1,
          ease: "back.inOut",
        })

        .to(".home-title h1", {
          top: "0",
          opacity: 1,
        })
        .to(".home-title h2", {
          top: "0",
          opacity: 1,
        })
        .to(".home-title h3", {
          top: "0",
          opacity: 1,
        })
        .to(".home-main h5", {
          opacity: 1,
          y: "-40",
          duration: 2,
          ease: "bounce.out",
          duration: 0.4,
        });
    }
  }, [isLoading]);
}
export default LoaderAnimation;
