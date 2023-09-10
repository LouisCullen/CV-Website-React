import React, { useEffect, useRef, useState } from "react";

interface popover {
    name: string;
    uses: string[];
}

interface props {
    icon: JSX.Element;
    popover: popover;
    globalPopover: string | null;
    setPopover: any;
}

const SkillItem = ({
    icon,
    popover,
    globalPopover,
    setPopover
}: props) => {
    const [height, setHeight] = useState<string>("min(200px,18vw)");
    const [width, setWidth] = useState<string>("min(200px,18vw)");
    const [padding, setPadding] = useState<string>("max(30px, 3vw)");
    const [order, setOrder] = useState<number>(0);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!globalPopover) {
            setHeight("min(150px,15vw)");
            setWidth("min(150px,15vw)");
            setPadding("max(30px, 3vw)");
            setOrder(0);
        } else if (globalPopover === popover.name) {
            setHeight("100vh");
            setWidth("300px");
            setPadding("max(45px, 4.5vw)");
            setOrder(0);
        } else {
            setHeight("min(100px,4.5vw)");
            setWidth("min(100px,4.5vw)");
            setPadding("max(15px, 1.5vw)");
            setOrder(0)
        }
    }, [globalPopover]);


    return (
        <div 
            ref={popoverRef}
            style={{ 
                display: "flex", 
                margin: padding,
                position: "relative", 
                // alignItems: "center", 
                maxHeight: height,
                maxWidth: width,
                transitionDuration: "1s",
                overflow: "hidden",
                flexDirection: "column",
                order: order
            }}
            onBlur={() => setPopover(null)}
            onFocus={() => console.log("focus")}
        >
            <div
                style={{
                    position: "relative",
                }}
                onClick={() => {
                    setPopover(popover.name);
                    popoverRef.current?.focus();
                }}
            >
                {icon}
            </div>
            <div 
                style={{ 
                    width: "min(300px,27vw)", 
                    display: "flex", 
                    alignItems: "center", 
                    flexDirection: "column",
                    paddingTop: "5%"
                }}
            >
                <h2>{popover.name}</h2>
                <ul style={{ textAlign: "left" }}>
                    {popover.uses.map((use, index) => 
                        <li key={index}>{use}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SkillItem;