import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { skillInterface } from "./Skills";

interface props {
    skill: skillInterface;
    globalPopover: skillInterface;
    setPopover: any;
    variants: any;
    transitioning: boolean;
}

const SkillItem = ({
    skill,
    globalPopover,
    setPopover,
    variants,
    transitioning
}: props) => {

    return (
            <motion.div
            variants={variants}
            style={{
                height: "max(15cqh, 14cqw)",
                width: "max(15cqh, 14cqw)",
                display: "flex",
                justifyContent: "center",
                padding: "max(4cqh, 4cqw)",
            }}
            >
                <motion.div 
                    animate={globalPopover === skill ? "selected" : "deselected"}
                    variants={{
                        selected: {
                            scale: 2,
                            transition: {
                                type: "spring",
                                duration: "1s"
                            }
                        },
                        deselected: {
                            scale: 1,
                            transition: {
                                type: "spring",
                                duration: "1s"
                            }
                        }
                    }}
                    onClick={() => {
                        if ((globalPopover !== skill) && !transitioning) setPopover(skill);
                    }}
                    style={{ width: "100%", height: "100%", color: "#bdc3c7", }}
                >
                        <skill.icon style={{ width: "100%", height: "100%", cursor: "pointer" }} />
                </motion.div>
            </motion.div>

    )
}

export default SkillItem;