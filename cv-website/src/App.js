import { Container } from 'react-bootstrap';
import './App.css';
import GlobalNavbar from './components/GlobalNavbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { useMotionValueEvent, useScroll } from 'framer-motion';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const windowSize = useWindowSize();
  const [mobile, setMobile] = useState(false);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: ref,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  const toggleNavbar = () => {
    setNavbarToggle(!navbarToggle);
  };
  
  useEffect(() => {
      if (!windowSize.width) return;
      setMobile(windowSize.width < 800)
  }, [windowSize.width]);

  return (
    <div className="App" style={{ background: "#353b48", height: "100vh", width: "100vw", position: "fixed" }}>
      <GlobalNavbar 
        setNavbarHeight={setNavbarHeight}
        toggleNavbar={toggleNavbar}
        scrollProgress={scrollProgress}
      />
      <Container 
        ref={containerRef}
        fluid 
        style={{ 
          background: "#353b48", 
          height: "100dvh",
          scrollSnapType: mobile ? "y mandatory" : "y proximity",
          scrollBehaviour: "smooth",
          overflowY: navbarToggle ? "hidden" : "auto",
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
          opacity: navbarToggle ? "0.5" : "1"
        }}
      >
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Hero />
          <Skills 
            navbarHeight={navbarHeight}
            mobile={mobile}
          />
          <Timeline 
            navbarHeight={navbarHeight}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
