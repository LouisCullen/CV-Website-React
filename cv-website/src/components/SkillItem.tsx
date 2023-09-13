import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface popover {
    name: string;
    uses: string[];
}

interface internalProps {
    icon: JSX.Element;
    popover: popover;
    setPopover: any;
    height: string;
    width: string;
    padding: string;
    iconCover: string;
    justifyContent: string;
    mobile: boolean;
}

const SkillItemInternals = ({
    icon,
    popover,
    setPopover,
    height,
    width,
    padding,
    iconCover,
    justifyContent,
    mobile
}: internalProps) => {

    return (
        <div 
            style={{ 
                display: "flex", 
                position: "relative", 
                maxHeight: height,
                maxWidth: width,
                transitionDuration: "1s",
                overflow: "hidden",
                flexDirection: mobile ? "row" : "column",
                width: "100%",
                margin: mobile ? 0 : padding,
                justifyContent: justifyContent
            }}
        >
            <div
                style={{
                    position: "relative",
                    flexShrink: 0,
                    padding: (iconCover === "40%") ? "5%" : 0,
                    width: iconCover,
                    color: "#bdc3c7"
                }}
                onClick={() => {
                    setPopover(popover.name);
                }}
                // onMouseLeave={() => {
                //     setPopover(null);
                // }}
            >
                {icon}
            </div>
            <div 
                style={{ 
                    // width: "min(300px,27vw)", 
                    display: "flex", 
                    alignItems: "center", 
                    flexDirection: "column",
                    paddingTop: mobile ? 0 : "5%",
                    justifyContent: "center",
                    marginLeft: mobile ? "2%" : 0
                }}
            >
                <h2 className="skill-name" style={{ fontWeight: "bold", color: "#9204e8 !important" }}>{popover.name}</h2>
                <ul style={{ textAlign: "center", listStylePosition: "inside", padding: 0, margin: 0, overflow: "hidden", whiteSpace: "nowrap" }}>
                    {popover.uses.map((use, index) => 
                        <li key={index}>{use}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

interface props {
    icon: JSX.Element;
    popover: popover;
    globalPopover: string | null;
    setPopover: any;
    variants: any;
}

const SkillItem = ({
    icon,
    popover,
    globalPopover,
    setPopover,
    variants
}: props) => {
    const [height, setHeight] = useState<string>("min(200px,18vw)");
    const [width, setWidth] = useState<string>("min(200px,18vw)");
    const [padding, setPadding] = useState<string>("max(30px, 3vw)");
    const [justifyContent, setJustifyContent] = useState<string>("start");
    const [iconCover, setIconCover] = useState<"100%"|"40%">("100%");
    const windowSize = useWindowSize();
    const [mobile, setMobile] = useState<boolean>(false);
    
    useEffect(() => {
        if (!windowSize.width) return;
        setMobile(windowSize.width < 800)
    }, [windowSize.width]);

    useEffect(() => {
        if (!globalPopover) {
            setIconCover("100%");
            setHeight("min(150px,15vw)");
            setWidth("min(150px,15vw)");
            setPadding("max(30px, 3vw)");
            setJustifyContent("start");
            // setOrder(0);
        } else if (globalPopover === popover.name) {
            setIconCover(mobile ? "40%" : "100%")
            // setOrder(mobile ? order+1 : 0);
            setHeight(mobile ? "200px" : "100vh");
            setWidth(mobile ? "100vw" : "200px");
            setJustifyContent(mobile ? "center" : "start");
            // setPadding("max(45px, 4.5vw)");
        } else {
            setIconCover("100%");
            setHeight("min(100px,10vw)");
            setWidth("min(100px,10vw)");
            setPadding("max(15px, 1.5vw)");
            setJustifyContent("start");
            // setTimeout(() => {
            //     setOrder(0);
            // }, 1000);
        }
    }, [globalPopover, mobile, popover.name]);

    return (
        mobile ? (
            <motion.div
            variants={variants}
            style={{
                maxHeight: height,
                maxWidth: width,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: padding,
            }}
            >
                <SkillItemInternals
                    icon={icon}
                    popover={popover}
                    setPopover={setPopover}
                    height={height}
                    width={width}
                    padding={padding}
                    iconCover={iconCover}
                    justifyContent={justifyContent}
                    mobile={mobile}
                />
            </motion.div>
        ) : (
            <SkillItemInternals
                icon={icon}
                popover={popover}
                setPopover={setPopover}
                height={height}
                width={width}
                padding={padding}
                iconCover={iconCover}
                justifyContent={justifyContent}
                mobile={mobile}
            />
        )

    )
}

export default SkillItem;