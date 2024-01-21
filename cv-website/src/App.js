import { Container } from "react-bootstrap";
import "./App.css";
import GlobalNavbar from "./components/GlobalNavbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Projects from "./components/Projects";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [pageScrollProgress, setPageScrollProgress] = useState(0);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const windowSize = useWindowSize();
  const [mobile, setMobile] = useState(false);
  const pageRef = useRef(null);
  const heroRef = useRef();
  const containerRef = useRef(null);

  const { scrollYProgress: pageScrollYProgress } = useScroll({
    container: containerRef,
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: heroScrollYProgress } = useScroll({
    container: containerRef,
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(pageScrollYProgress, "change", (latest) => {
    setPageScrollProgress(latest);
  });

  useMotionValueEvent(heroScrollYProgress, "change", (latest) => {
    setHeroScrollProgress(latest);
  });

  const toggleNavbar = () => {
    setNavbarToggle(!navbarToggle);
  };

  useEffect(() => {
    if (!windowSize.width) return;
    setMobile(windowSize.width < 800);
  }, [windowSize.width]);

  return (
    <div
      className="App"
      style={{
        background: "#1a1d23",
        height: "100vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      <GlobalNavbar
        setNavbarHeight={setNavbarHeight}
        toggleNavbar={toggleNavbar}
        pageScrollProgress={pageScrollProgress}
        heroScrollProgress={heroScrollProgress}
      />
      <Container
        ref={containerRef}
        fluid
        style={{
          // background: "#353b48",
          background: "#1a1d23",
          height: "100dvh",
          scrollSnapType: mobile ? "y mandatory" : "y proximity",
          scrollBehaviour: "smooth",
          overflowY: navbarToggle ? "hidden" : "auto",
          overflowX: "hidden",
          scrollbarWidth: 0,
          overflowStyle: "none",
          padding: 0,
          top: 0,
          transform: navbarToggle ? "translateY(10%)" : "translateY(0%)",
          position: "fixed",
          scale: navbarToggle ? "0.8" : "1",
          transitionDuration: "0.35s",
          transitionTimingFunction: "ease",
          pointerEvents: navbarToggle ? "none" : "all",
          opacity: navbarToggle ? "0.5" : "1",
        }}
      >
        <div
          ref={pageRef}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Hero ref={heroRef} scrollProgress={heroScrollProgress} />
          <Projects navbarHeight={navbarHeight} />
          {/* <Skills navbarHeight={navbarHeight} mobile={mobile} /> */}
          <Timeline navbarHeight={navbarHeight} />
        </div>
      </Container>
    </div>
  );
}

export default App;
