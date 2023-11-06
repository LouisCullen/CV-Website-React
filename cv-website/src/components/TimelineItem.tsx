import { position } from "./Timeline";
import { useEffect, useState } from "react";

interface props {
    position: position;
    index: number;
    current: number;
}

const TimelineItem = ({
    position,
    index,
    current
}: props) => {
    const [rotation, setRotation] = useState<number>((Math.random()*2-1)*10);
    const [inView, setInView] = useState<boolean>(false);
    const [moreInfo, setMoreInfo] = useState<boolean>(false);
    const [flipped, setFlipped] = useState<boolean>(false);

    useEffect(() => {
        let currentRotation = rotation;
        if (current === index -1) currentRotation = (Math.random()*2-1)*45;
        else if (current === index && !inView) currentRotation = -currentRotation/2;
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
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center",
                padding: "2em",
                alignItems: "center", 
                height: "60%",
                width: "min(80%, 400px)",
                transition: "box-shadow 1s, scale 1s, translate 1s ease-in-out, rotate 1s ease-out, transform linear 0.5s",
                left: "50%",
                top: "50%",
                rotate: flipped ? "0deg" : `${rotation}deg`,
                translate: current >= index ? "-50% -50%" : "300% -50%",
                scale: current < index || flipped ? "1.5" : "1",
                background: moreInfo ? "#293040" : `radial-gradient(circle at 30%, rgba(62,54,89,1) 0%, rgba(41,48,64,1) 50%)`,
                borderRadius: "15px",
                boxShadow: current < index ? "30px 30px 40px rgba(0,0,0,0.9)" : (moreInfo ? "-20px 20px 30px rgba(0,0,0,0.9)" : "2px 2px 5px rgba(0,0,0,0.9)"), //need to fix shadow direction
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                cursor: moreInfo ? "pointer" : "auto",
                pointerEvents: current > index ? "none" : "all",
                touchAction: current > index ? "none" : "all"
            }} 
            onClick={() => {if (flipped) setFlipped(false)}}
        >
            {moreInfo ? (
                <div style={{ marginTop: "1em", textAlign: "left", zIndex: "-1" , transform: "rotateY(180deg)" }}>
                    <ul>
                        {position.details?.map((detail, i) => 
                            <li key={i}>{detail}</li>
                        )}
                    </ul>
                </div>
            ) : (
                <div>
                    <div style={{ position: "absolute", right: "1em", top: "1em" }}>
                        <h3 style={{ margin: 0, fontWeight: "bold" }}>
                            {position.startDate.toLocaleDateString('en-GB', {year: "numeric", month: "short"})}
                            {position.endDate && (
                                <span> - {(new Date().getDate() === position.endDate.getDate()) ? "Current" : position.endDate.toLocaleDateString('en-GB', {year: "numeric", month: "short"})}</span>
                            )}
                        </h3>
                    </div>
                    <h2 style={{ textAlign: "left" }}>{position.event} </h2>
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
                    >Read about it</h5>
                </div>
            )}
        </div>
    )
}

export default TimelineItem;