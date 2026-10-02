"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HEADINGS = ["UI & UX", "Development", "Blockchain"];

const EASE = [0.65, 0, 0.35, 1] as const;

export default function HeadingRotator() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((value) => value + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-20! text-h1 relative h-60.5 w-84.25 ">
      <span aria-hidden className="invisible block h-0">
        Development
      </span>

      {HEADINGS.map((text, index) => (
        <Heading key={text} text={text} index={index} step={step} />
      ))}
    </div>
  );
}

function Heading({
  text,
  index,
  step,
}: {
  text: string;
  index: number;
  step: number;
}) {
  const slot = (index + step) % HEADINGS.length;

  return (
    <motion.div
      animate={{ y: slot * 56 }}
      transition={{
        duration: 0.8,
        ease: EASE,
      }}
      className="absolute left-0 top-0 h-13 whitespace-nowrap font-bold text-[52px] "
    >
      {text}
    </motion.div>
  );
}
