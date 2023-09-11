import { Container } from 'react-bootstrap';
import './App.css';
import GlobalNavbar from './components/GlobalNavbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <GlobalNavbar />
      <Container 
        fluid 
        style={{ 
          background: "#353b48", 
          minHeight: "100vh",
          scrollSnapType: "y proximity",
          overflowY: "auto",
          scrollbarWidth: 0,
          overflowStyle: "none",
          padding: 0
        }}
      >
        <Hero />
        {/* <Hero /> */}
        <Skills />
        <Container
          fluid
          style={{ height: "100vh" }}
        ></Container>
      </Container>
    </div>
  );
}

export default App;
