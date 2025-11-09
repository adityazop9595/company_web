import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Trigger when at least 10% of section is visible
const useAnimateOnView = (once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.15 }); // 15% visible
  return { ref, isInView };
};

export function LeftToRightAnimation({ children, delay = 0, duration = 0.9 }) {
  const { ref, isInView } = useAnimateOnView(true);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function RightToLeftAnimation({ children, delay = 0, duration = 0.8 }) {
  const { ref, isInView } = useAnimateOnView(true);

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function BottomToTopAnimation({ children, delay = 0, duration = 0.9 }) {
  const { ref, isInView } = useAnimateOnView(true);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function PoPAnimation({ children, delay = 0.1, duration = 0.8 }) {
  const { ref, isInView } = useAnimateOnView(true);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0, scale: 0.9 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  );
}


