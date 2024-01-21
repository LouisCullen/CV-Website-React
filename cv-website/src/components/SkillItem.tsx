import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";

export interface skillInterface {
  icon: IconType;
  name: string;
}

interface props {
  skill: skillInterface;
  active: boolean;
  variants: any;
}

const SkillItem = ({ skill, active, variants }: props) => {
  return (
    <motion.div
      variants={variants}
      style={{
        height: "max(13cqh, 10cqw)",
        width: "max(13cqh, 10cqw)",
        display: "flex",
        justifyContent: "center",
        padding: "max(4cqh, 3cqw)",
      }}
    >
      <motion.div
        animate={active ? "selected" : "deselected"}
        variants={{
          selected: {
            scale: 2,
            color: "#a76ed8",
            transition: {
              type: "spring",
              duration: "1s",
            },
          },
          deselected: {
            scale: 1.3,
            transition: {
              type: "spring",
              duration: "1s",
            },
          },
        }}
        style={{ width: "100%", height: "100%", color: "#bdc3c7" }}
      >
        <skill.icon style={{ width: "100%", height: "100%" }} />
      </motion.div>
    </motion.div>
  );
};

export default SkillItem;
