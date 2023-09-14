import { Container } from 'react-bootstrap';
import './App.css';
import GlobalNavbar from './components/GlobalNavbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { useState } from 'react';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

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
          scrollSnapType: "y mandatory",
          overflowY: "auto",
          scrollbarWidth: 0,
          overflowStyle: "none",
          padding: 0,
          paddingBottom: "10vh",
          position: "relative",
          top: navbarHeight
        }}
      >
        <Hero />
        {/* <Hero /> */}
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
