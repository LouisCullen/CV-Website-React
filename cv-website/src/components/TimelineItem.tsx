import { position } from "./Timeline";
import { useEffect, useState } from "react";

interface props {
  position: position;
  index: number;
  current: number;
}

const TimelineItem = ({ position, index, current }: props) => {
  const [rotation, setRotation] = useState<number>(
    (Math.random() * 2 - 1) * 10
  );
  const [inView, setInView] = useState<boolean>(false);
  const [moreInfo, setMoreInfo] = useState<boolean>(false);
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    let currentRotation = rotation;
    if (current === index - 1) currentRotation = (Math.random() * 2 - 1) * 45;
    else if (current === index && !inView)
      currentRotation = -currentRotation / 4;
    setRotation(currentRotation);
    setInView(current >= index);
  }, [current]);

  useEffect(() => {
    setTimeout(() => {
      setMoreInfo(flipped);
    }, 250);
  }, [flipped]);

  return (
    <div
      style={{
        position: "absolute",
        height: "60%",
        width: "min(80%, 400px)",
        transition: "scale 1s, translate 1s ease-in-out, rotate 1s ease-out",
        left: "50%",
        top: "50%",
        rotate: flipped ? "0deg" : `${rotation}deg`,
        translate: current >= index ? "-50% -50%" : "300% -50%",
        scale: current < index || flipped ? "1.5" : "1",
        background: "transparent",
        cursor: moreInfo ? "pointer" : "auto",
        pointerEvents: current > index ? "none" : "all",
        touchAction: current > index ? "none" : "all",
        zIndex: (index + 1) * 1000,
        perspective: "1000px",
      }}
      onClick={() => {
        if (flipped) setFlipped(false);
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "15px",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.75s",
        }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            position: "absolute",
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
            padding: "2em",
            boxSizing: "border-box",
            // background:
            //   "radial-gradient(circle at 30%, rgba(62,54,89,0.75) 0%, rgba(30,35,45,1) 50%)",
            background: "rgba(33,35,45,1)",
            borderRadius: "15px",
            transition: "box-shadow 1s",
            boxShadow:
              current < index
                ? "30px 30px 40px rgba(0,0,0,0.9)"
                : "2px 2px 5px rgba(0,0,0,0.9)",
          }}
        >
          <div style={{ position: "absolute", right: "1em", top: "1em" }}>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>
              {position.startDate.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
              })}
              {position.endDate && (
                <span>
                  {" "}
                  -{" "}
                  {new Date().getDate() === position.endDate.getDate()
                    ? "Current"
                    : position.endDate.toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                      })}
                </span>
              )}
            </h3>
          </div>
          <h2
            style={{
              textAlign: "left",
              position: "absolute",
              top: "50%",
              left: "0",
              translate: "0 -50%",
              padding: "1em",
              boxSizing: "border-box",
            }}
          >
            {position.event}{" "}
          </h2>
          <h5
            onClick={() => setFlipped(true)}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              fontWeight: "bold",
            }}
          >
            Read about it
          </h5>
        </div>
        <div
          style={{
            transformStyle: "preserve-3d",
            padding: "2em",
            textAlign: "left",
            transform: "rotateY(180deg)",
            position: "absolute",
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
            background: "rgba(40,35,55,1)",
            borderRadius: "15px",
            boxShadow: "20px 20px 30px rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul>
            {position.details?.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
