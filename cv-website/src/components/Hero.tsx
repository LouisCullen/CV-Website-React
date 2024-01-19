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
        height: "100dvh",
        scrollSnapAlign: "center",
        overflow: "hidden",
        opacity: `min(${3 - props.scrollProgress * 4}, 1)`,
      }}
    >
      <div
        style={{
          maxHeight: transition ? "0" : "100vh",
          transitionDuration: "1.5s",
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
          pointerEvents: "none",
        }}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        controls={false}
        src={require("../images/hero_background.mp4")}
      ></video>
      <div className="heroText">
        <h1>LOUIS CULLEN</h1>
        <p>Software Engineer</p>
      </div>
    </Container>
  );
});

export default Hero;
