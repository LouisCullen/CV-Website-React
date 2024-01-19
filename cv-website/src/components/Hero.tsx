import { forwardRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

interface props {
  scrollProgress: number;
}

const Hero = forwardRef<HTMLDivElement, props>(function (props, ref) {
  const [transition, setTransition] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
    setTimeout(() => {
      setTransition(true);
    }, 800);
  }, []);

  return (
    <Container
      ref={ref}
      fluid
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        // background: "linear-gradient(to bottom, #272c36 20%, #353b48)",
        // paddingBottom: "10vw",
        height: "100dvh",
        // position: "relative",
        scrollSnapAlign: "center",
        overflow: "hidden",
        opacity: `min(${3 - props.scrollProgress * 4}, 1)`,
      }}
    >
      <div
        style={{
          maxHeight: transition ? "0" : "100vh",
          transitionDuration: "1.5s",
          //   transitionTimingFunction: "cubic-bezier(0.525, 1.195, 0.415, 0.955)",
          transitionTimingFunction: "cubic-bezier(0.290, 1.155, 0.110, 0.960)",
          height: "100%",
          width: "100%",
          background: "#171a1f",
          position: "absolute",
          zIndex: 2,
        }}
      ></div>
      <video
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
          filter: "blur(4px) brightness(100%)",
          opacity: "10%",
          maskImage:
            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
        }}
        autoPlay
        loop
        muted
      >
        <source
          src={require("../images/hero_background.mp4")}
          type="video/mp4"
        />
      </video>
      <div className="heroText">
        <h1>LOUIS CULLEN</h1>
        <p>Software Engineer</p>
      </div>
      {/* <div style={{ maxHeight: "600px", height: "100vw", maxWidth: "1000px", width: "100%", position: "relative", display: "flex", alignItems: "center" }}>

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
                    className="text-wrap-balance"
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
                    <h1><b>I'm Louis, a Software Developer based in Manchester/London</b></h1>
                </div>
            </div> */}
    </Container>
  );
});

export default Hero;
