import { Container } from "react-bootstrap";

const Hero = () => {
    return(
        <Container 
            fluid 
            style={{  
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                scrollSnapAlign: "center",
                padding: 0,
                paddingTop: "10vh"
            }}
        >
            <div style={{ height: "600px", maxWidth: "1000px", width: "100%", position: "relative" }}>
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
                        zIndex: 1,
                        marginTop: "-5rem",
                        background: "linear-gradient(to left, rgba(53, 59, 72, 1) 25%, rgba(53, 59, 72, 0.5))",
                        padding: "1rem"
                    }}
                >
                    <h1><b>I'm Louis, a Computer Science student based in Manchester/London</b></h1>
                </div>
                <img 
                    src={require("../images/profile.jpeg")} 
                    alt="profile" 
                    style={{ 
                        maxHeight: "100%", 
                        maxWidth: "100%",
                        position: "relative",
                        // left: "-10%"
                    }}
                />
            </div>
        </Container>
    )
}

export default Hero;