import { motion, useReducedMotion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Reveal({ children, delay = 0, className = "", as = "div", once = true }) {
  const MotionTag = motion[as] ?? motion.div;
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
