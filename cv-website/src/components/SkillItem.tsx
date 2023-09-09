import React from "react";

interface popover {
    name: string;
    uses: string[];
}

interface props {
    icon: JSX.Element;
    popover: popover;
    setPopover: any;
    popoverRef: any;
}

const SkillItem = ({
    icon,
    popover,
    setPopover,
    popoverRef
}: props) => {
    

    return (
        <div style={{ display: "flex", padding: "max(30px, 3vw)", position: "relative", justifyContent: "center" }}>
            <div
                style={{
                    position: "relative",
                }}
                onClick={() => {
                    setPopover(popover);
                    popoverRef.current?.focus();
                }}
            >
                {icon}
            </div>
        </div>
    )
}

export default SkillItem;