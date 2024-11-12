import React from "react";
import { motion } from "framer-motion"
import { ReactNode } from "react";

interface AnimatedProps {
    children: ReactNode;
}

const animations = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
}

const Transition = ({ children }: AnimatedProps) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.65 }}
        >
            {children}
        </motion.div>
    )
}

export default Transition;