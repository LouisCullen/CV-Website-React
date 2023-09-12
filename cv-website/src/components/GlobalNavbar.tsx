import { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaBars, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const GlobalNavbar = () => {
    const [transition, setTransition] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 1000);        
    }, []);
    
    return (
        <Navbar 
            expand='lg' 
            sticky='top' 
            style={{ 
                background: "linear-gradient(to bottom, #16181e, #272c36)",
                margin: 0,
                alignItems: "center", 
                padding: "10px"
            }}>
            <Container fluid>
                <Navbar.Brand 
                    href='#' 
                    className="navbar-brand brand justify-content-start" 
                    style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingRight: "25px",
                        margin: 0,
                        position: "relative",
                        top: transition ? "0" : "-100px",
                        transitionDuration: "0.6s",
                        transitionTimingFunction: "ease-in-out",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <img src={require("../logo.png")} alt="Logo" style={{ maxWidth: "510px", width:"60vw" }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarToggler" style={{ border: "none" }}>
                    <FaBars 
                        style={{ 
                            color: "#ecf0f1",
                            opacity: transition ? 100 : 0,
                            transitionDuration: "1s",
                            transitionDelay: "1s",
                            transitionTimingFunction: "ease-in-out"
                        }} 
                    />
                </Navbar.Toggle>
                <Navbar.Collapse 
                    id="navbarToggler" 
                    style={{
                        alignItems: "initial",
                        justifyContent: "space-between",
                    }}
                >
                    <Nav 
                        className="navbar-nav" 
                        style={{ 
                            display: "flex", 
                            alignItems: "start",
                            opacity: transition ? 100 : 0,
                            transitionDuration: "1.2s",
                            transitionDelay: "1.2s",
                            transitionTimingFunction: "ease-in"
                        }}
                    >
                        <Nav.Link href="#projects" style= {{ color: "#bdc3c7" }}>Projects</Nav.Link>
                        <Nav.Link href="#experience" style= {{ color: "#bdc3c7" }}>Experience</Nav.Link>
                        <Nav.Link href="#education" style= {{ color: "#bdc3c7" }}>Education</Nav.Link>
                        <Nav.Link href="#personal" style= {{ color: "#bdc3c7" }}>Personal</Nav.Link>
                    </Nav>
                    <Nav 
                        style={{ 
                            paddingRight: "5px", 
                            alignItems:"center",
                            opacity: transition ? 100 : 0,
                            transitionDuration: "1.2s",
                            transitionDelay: "1.2s",
                            transitionTimingFunction: "ease-in"
                        }}
                    >
                        <Nav.Link><FaGithub href="https://github.com/LouisCullen" style= {{ color: "#bdc3c7", marginLeft: "15px" }} fontSize="25px"/></Nav.Link>
                        <Nav.Link><FaEnvelope href="mailto: cullen_louis@icloud.com" style= {{ color: "#bdc3c7", marginLeft: "15px" }} fontSize="25px"/></Nav.Link>
                        <Nav.Link><FaLinkedin href="https://www.linkedin.com/in/louis-cullen" style= {{ color: "#bdc3c7", marginLeft: "15px" }} fontSize="25px"/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GlobalNavbar;