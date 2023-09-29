import { Container } from 'react-bootstrap';
import './App.css';
import GlobalNavbar from './components/GlobalNavbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { useState, useEffect } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const windowSize = useWindowSize();
  const [mobile, setMobile] = useState(false);

  const toggleNavbar = () => {
    setNavbarToggle(!navbarToggle);
  };
  
  useEffect(() => {
      if (!windowSize.width) return;
      setMobile(windowSize.width < 800)
  }, [windowSize.width]);

  return (
    <div className="App" style={{ background: "#353b48", height: "100vh" }}>
      <GlobalNavbar 
        setNavbarHeight={setNavbarHeight}
        toggleNavbar={toggleNavbar}
      />
      <Container 
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
        <Hero />
        <Skills 
          navbarHeight={navbarHeight}
          mobile={mobile}
        />
        <Timeline 
          navbarHeight={navbarHeight}
        />
        <Container
          fluid
          style={{ height: "100vh" }}
        />
      </Container>
    </div>
  );
}

export default App;
