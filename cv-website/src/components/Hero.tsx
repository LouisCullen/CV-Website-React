import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
    const [transition, setTransition] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 1000);        
    }, []);

    return(
        <Container 
            fluid 
            style={{  
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                scrollSnapAlign: "center",
                padding: 0,
                paddingTop: "10vh",
                background: "linear-gradient(to bottom, #272c36, #353b48)", 
                paddingBottom: "10vw",
                minHeight: "80vh"
            }}
        >
            <div style={{ maxHeight: "600px", height: "100vw", maxWidth: "1000px", width: "100%", position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "25%",
                        textAlign: "right",
                        display: "flex",
                        alignItems: "center",
                        width: "min-content",
                        minWidth: "65%",
                        zIndex: 2,
                        marginTop: "-5rem",
                        background: "linear-gradient(to left, rgba(53, 59, 72, 1) 25%, rgba(53, 59, 72, 0.5))",
                        padding: "1rem",
                        opacity: transition ? 100 : 0,
                        transitionDuration: "1s",
                        transitionDelay: "1s",
                        transitionTimingFunction: "ease-in-out"
                    }}
                >
                    <h1><b>I'm Louis, a junior Software Developer based in Manchester/London</b></h1>
                </div>
                <img 
                    src={require("../images/profile.jpeg")} 
                    alt="profile" 
                    style={{ 
                        maxHeight: "100%", 
                        maxWidth: "100%",
                        opacity: transition ? 100 : 0,
                        transitionDuration: "1s",
                        transitionTimingFunction: "ease-in-out",
                        zIndex: 1,
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                />
            </div>
        </Container>
    )
}

export default Hero;