import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function NavbarAnimation() {
  let toggle = document.querySelector(".navbar-container #toggle");
  console.log(toggle);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".Navbar-Left .icon-links-container .icon-link ", {
      top: -100,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.3,
    });
    tl.from(".Navbar-Left .icon-links-container>.icon-link>a ", {
      y: -100,
      opacity: 0,
      duration: 0.9,
      stagger: 0.3,
    });
    tl.from(".Navbar-middle .nav-links li", {
      top: -200,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.3,
    });
    tl.from(".Navbar-Right .Navbar-Search-Bar>input", {
      y: -100,
      opacity: 0,
      duration: 0.9,
    });
    tl.from(".navbar-container .Navbar-Right .Navbar-Search-Bar>i", {
      y: -100,
      opacity: 0,
      duration: 0.3,
    });
    tl.from(".navbar-container .Navbar-Right .Navbar-Hamburger-menu", {
      y: -100,
      opacity: 0,
      duration: 0.3,
    });
    // gsap.to(".navbar-container .navLink-BackGround-Slider", {
    //     opacity: 1,
    //     duration: 2,
    //     ease: "bounce3.out",
    //     transform: "translateX(-200px)",
    //     borderRadius: "100px 10px 100px 10px",
    //   });
    // gsap.to(".navbar-container .navLink-BackGround-Slider-toggle", {
    //     opacity: 0,
    //     duration: 1,
    //     ease: "bounce2.out",
    //     transform: "translateX(-1000px)",
    //     borderRadius: "10px 100px 10px 100px",
    //   });
  }, []);
}
export default NavbarAnimation;
