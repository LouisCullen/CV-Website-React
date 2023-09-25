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
  const windowSize = useWindowSize();
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
      if (!windowSize.width) return;
      setMobile(windowSize.width < 800)
  }, [windowSize.width]);

  return (
    <div className="App">
      <GlobalNavbar 
        setNavbarHeight={setNavbarHeight}
      />
      <Container 
        fluid 
        style={{ 
          background: "#353b48", 
          height: "100vh",
          scrollSnapType: mobile ? "y mandatory" : "y proximity",
          scrollBehaviour: "smooth",
          overflowY: "auto",
          scrollbarWidth: 0,
          overflowStyle: "none",
          padding: 0,
          top: 0,
          position: "fixed"
        }}
      >
        <Hero />
        <Skills 
          navbarHeight={navbarHeight}
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
