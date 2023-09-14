import { FaPlay } from "react-icons/fa";
import { position } from "./Timeline";
import { useEffect, useRef, useState } from "react";

interface props {
    position: position;
    index: number;
}

const TimelineItem = ({
    position,
    index
}: props) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const [viewed, setViewed] = useState<boolean>(false);
    const ref = useRef<any>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-5%" }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
      }, []);

      useEffect(() => {
        if (isIntersecting) {
          setViewed(true);
        }
        console.log(isIntersecting);
      }, [isIntersecting]);

    return (
        <div 
            style={{ 
                position: "relative", 
                display: "flex", 
                flexDirection: "column",
                paddingTop: index === 0 ? "calc(5vh + 2rem)" : (viewed ? "2rem" : "50em"),
                paddingBottom: "3em", 
                alignItems: "start", 
                top: viewed ? "0px" : "40vh", 
                borderLeft: `5px solid ${viewed ? "#c44df0" : "#bdc3c7"}`,
                transitionDuration: "1s",
                left: "-5px",
            }} 
            ref={ref}
        >
            <div style={{ display: "flex", }}>
                <div style={{ paddingLeft: "1em", paddingRight: "1vw", display: "flex", alignItems: "center", position: "relative" }}>
                    <FaPlay style={{ position: "absolute", left: -5, color: viewed ? "#c44df0" : "#bdc3c7", transitionDuration: "1s" }}/>
                    <p style={{ margin: 0 }}>
                        {position.startDate.toLocaleDateString('en-GB', {year: "numeric", month: "short"})}
                        {position.endDate && (
                            <span> - {(new Date().getDate() === position.endDate.getDate()) ? "Current" : position.endDate.toLocaleDateString('en-GB', {year: "numeric", month: "short"})}</span>
                        )}
                    </p>
                </div>
                <div>
                    <h2 style={{ display: "inline" }}>{position.role} </h2>
                    <h4 style={{ display: "inline" }}> at {position.company}</h4>
                </div>
            </div>
            {position.details && (
                <div style={{ marginTop: "1em", textAlign: "left" }}>
                    <ul>
                        {position.details.map((detail, i) => 
                            <li key={i}>{detail}</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default TimelineItem;