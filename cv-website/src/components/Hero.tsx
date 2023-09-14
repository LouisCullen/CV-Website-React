import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
    const [transition, setTransition] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);
        setTimeout(() => {
            setTransition(true);
        }, 800);        
    }, []);

    return(
        <Container 
            fluid 
            style={{  
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: 0,
                background: "linear-gradient(to bottom, #272c36 20%, #353b48)", 
                // paddingBottom: "10vw",
                height: "100vh",
                position: "relative",
                scrollSnapAlign: "center"
            }}
        >
            <div style={{ maxHeight: "600px", height: "100vw", maxWidth: "1000px", width: "100%", position: "relative", display: "flex", alignItems: "center" }}>

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
                        // position: "absolute",
                        // top: 0,
                        // left: 0
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: 0,
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
            </div>
        </Container>
    )
}

export default Hero;