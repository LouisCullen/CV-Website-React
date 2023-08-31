import { Container } from 'react-bootstrap';
import './App.css';
import GlobalNavbar from './components/GlobalNavbar';

function App() {
  return (
    <div className="App">
      <GlobalNavbar />
      <Container fluid style={{ background: "linear-gradient(to bottom, #272c36, #353b48 7%)", minHeight: "100vh" }} />
    </div>
  );
}

export default App;
