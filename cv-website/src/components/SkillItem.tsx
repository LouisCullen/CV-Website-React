import React, { useEffect, useState } from "react";

interface popover {
    name: string;
    uses: string[];
}

interface props {
    icon: JSX.Element;
    popover: popover;
    globalPopover: string | null;
    setPopover: any;
    popoverRef: any;
}

const SkillItem = ({
    icon,
    popover,
    globalPopover,
    setPopover,
    popoverRef
}: props) => {
    const [height, setHeight] = useState<string>("min(200px,18vw)");
    const [width, setWidth] = useState<string>("min(200px,18vw)");
    const [padding, setPadding] = useState<string>("max(30px, 3vw)");

    useEffect(() => {
        if (!globalPopover) {
            setHeight("min(150px,15vw)");
            setWidth("min(150px,15vw)");
            setPadding("max(30px, 3vw)");
        } else if (globalPopover === popover.name) {
            setHeight("min(300px,27vw)");
            setWidth("min(300px,27vw)");
            setPadding("max(45px, 4.5vw)");
        } else {
            setHeight("min(100px,4.5vw)");
            setWidth("min(100px,4.5vw)");
            setPadding("max(15px, 1.5vw)");
        }
    }, [globalPopover]);


    return (
        <div 
            style={{ 
                display: "flex", 
                margin: padding,
                position: "relative", 
                // justifyContent: "center", 
                maxHeight: height,
                maxWidth: width,
                height: "100vh",
                width: "100vw",
                transitionDuration: "1s",
                overflow: "hidden",
                flexDirection: "column"
            }}
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