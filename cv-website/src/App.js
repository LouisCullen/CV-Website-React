import { Container } from 'react-bootstrap';
import './App.css';
import GlobalNavbar from './components/GlobalNavbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <GlobalNavbar />
      <Container 
        fluid 
        style={{ 
          background: "#353b48", 
          // minHeight: "100vh",
          // scrollSnapType: "y proximity",
          // overflowY: "auto",
          // scrollbarWidth: 0,
          // overflowStyle: "none",
          padding: 0,
          paddingBottom: "10vh",
          height: "100%"
        }}
      >
        <Hero />
        {/* <Hero /> */}
        <Skills />
        <Timeline />
        <Container
          fluid
          style={{ height: "100vh" }}
        />
      </Container>
    </div>
  );
}

export default App;
