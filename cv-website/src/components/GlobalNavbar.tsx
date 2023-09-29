import { useEffect, useRef, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaBars, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const GlobalNavbar = ({ setNavbarHeight }: any) => {
    const [transition, setTransition] = useState<boolean>(false);
    const navbarRef = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            setTransition(true);
            setNavbarHeight(-navbarRef.current.clientHeight);
        }, 1000);        
    }, []);
    
    return (
        <Navbar 
            ref={navbarRef}
            expand='lg' 
            sticky='top' 
            style={{ 
                background: "linear-gradient(to bottom, rgba(22, 24, 30, 1), rgba(22, 24, 30, 0) 60%)",
                margin: 0,
                alignItems: "center", 
                padding: "10px"
            }}>
            <Container fluid style={{ alignItems: "center" }}>
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
                        alignItems: "center",
                        fontFamily: "lexend"
                    }}
                >
                    <h1 style={{ textAlign: "left", margin: 0, fontSize: "min(3rem, 5.5vw)" }}>Louis Cullen - Developer</h1>
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
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#journey">Journey</Nav.Link>
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
                        <Nav.Link href="https://github.com/LouisCullen"><FaGithub style= {{ marginLeft: "15px" }} fontSize="25px"/></Nav.Link>
                        <Nav.Link href="mailto: cullen_louis@icloud.com"><FaEnvelope style= {{ marginLeft: "15px" }} fontSize="25px"/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/louis-cullen"><FaLinkedin style= {{ marginLeft: "15px" }} fontSize="25px"/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GlobalNavbar;