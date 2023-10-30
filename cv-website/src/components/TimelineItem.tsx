import { FaPlay } from "react-icons/fa";
import { position } from "./Timeline";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface props {
    position: position;
    index: number;
}

const TimelineItem = ({
    position,
    index
}: props) => {
    // const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    // const [viewed, setViewed] = useState<boolean>(false);
    const ref = useRef<any>(null);
    const viewed = useInView(ref, { once: true });

    return (
        <div 
            style={{ 
                position: "relative", 
                display: "flex", 
                flexDirection: "column",
                paddingTop: "8vmax",
                paddingBottom: "2vmax", 
                alignItems: "start", 
                opacity: viewed ? 1 : 0,
                borderLeft: `5px solid ${viewed ? "#c44df0" : "#bdc3c7"}`,
                transitionDuration: "1s",
                left: "-5px",
            }} 
        >
            <div ref={ref} style={{ position: "absolute", top: "110%" }}></div>
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