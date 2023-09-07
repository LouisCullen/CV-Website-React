import { Container } from 'react-bootstrap';
import './App.css';
import GlobalNavbar from './components/GlobalNavbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <GlobalNavbar />
      <Container 
        fluid 
        style={{ 
          background: "linear-gradient(to bottom, #272c36, #353b48 7%)", 
          height: "100vh",
          scrollSnapType: "y proximity",
          overflowY: "auto",
          scrollbarWidth: 0,
          overflowStyle: "none",
          padding: 0
        }}
      >
        <Hero />
        {/* <Hero /> */}
      </Container>
    </div>
  );
}

export default App;
