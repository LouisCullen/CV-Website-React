import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface props {
    index: number;
    icon: JSX.Element;
    name: string;
    uses: string[];
    salt: number;
}

const SkillItem = ({
    index,
    icon,
    name,
    uses,
    salt
}: props) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    return (
        <>
        <div
            style={{
                position: "relative",
                left: `${salt}vw`
            }}
            onClick={() => {
                setToggle(true);
                popoverRef.current?.focus();
            }}
        >
            {icon}
        </div>
        <div
            ref={popoverRef}
            style={{
                maxHeight: toggle ? "100vh" : 0,
                overflow: "hidden",
                background: "#16181e",
                position: "absolute",
                padding: toggle ? "2em" : 0,
                transitionDuration: "1s",
            }}
            tabIndex={0}
            onBlur={() => setToggle(false)}
            onFocus={() => console.log("focused")}
        >
            <FaTimes style={{ position: "absolute", right: "1em", top: "1em", cursor: "pointer"}} onClick={() => setToggle(false)}/>
            <h2 style={{ fontWeight: "bold" }}>{name}</h2>
            <ul style={{ textAlign: "left" }}>
                {uses.map((use, i) => (
                    <li key={i}>{use}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default SkillItem;