import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedProps {
    children: ReactNode;
}

const animations = {
    initial: { opacity: 0, clipPath: "inset(50% 0 50% 0)" },
    animate: { opacity: 1, clipPath: "inset(0% 0 0% 0)" },
    exit: { opacity: 0, clipPath: "inset(50% 0 50% 0)" },
};

const Transition = ({ children }: AnimatedProps) => {
    return (
        <motion.div
            style={{ position: "relative", overflow: "hidden" }}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Transition;
