import React from 'react';
import { motion } from "framer-motion";


export function ArrowOptions() {
    const parent = {
        variantA: { scale: 1 },
        variantB: { scale: 1.25 }
    };

    const child = {
        variantA: { opacity: 0, left: 0 },
        variantB: { opacity: 1, left: 1 }
    };

    return (
        <motion.div
            style={{
                width: 300,
                height: 85,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,0)",
                position: "relative"
            }}
            variants={parent}
            initial="variantA"
            whileHover="variantB"
        >
            <div className = "buttonSelect">
                OPTIONS
            </div>
            <motion.div
                style={{
                    width: 85,
                    height: 85,
                    borderRadius: "20px 20px 30px 20px",
                    backgroundColor: "#fff",
                    position: "relative",
                    bottom: 0,
                    right: 0
                }}
                variants={child}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    duration: 2,
                    delayChildren: 0.2
                }}
            />
        </motion.div>
    );
}

export default ArrowOptions