"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Outfit } from "next/font/google";
import { ArrowDown, ArrowRight } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const COURSES = [
  {
    id: "all",
    count: "23",
    title: ["All Courses"],
    desc: ["courses you're powering", "through right now."],
  },
  {
    id: "upcoming",
    count: "05",
    title: ["Upcoming", "Courses"],
    desc: ["exciting new courses", "waiting to boost your skills."],
  },
  {
    id: "ongoing",
    count: "10",
    title: ["Ongoing", "Courses"],
    desc: ["currently happening—don't", "miss out on the action!"],
  },
];

const ACTIVE_W = 592;
const COMPACT_W = 280;
const EASE = [0.65, 0, 0.35, 1] as const;

const Plus = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    aria-hidden
    className={`absolute h-10 w-10 fill-current ${className}`}
  >
    <path d="M16 0h8v16h16v8H24v16h-8V24H0v-8h16z" />
  </svg>
);

export default function CoursesSection() {
  const [active, setActive] = useState("all");
  const [blink, setBlink] = useState(false);
  const reduce = useReducedMotion();

  // One timing helper so every piece moves with the same easing.
  const t = (delay = 0, duration = 0.5) =>
    reduce ? { duration: 0 } : { duration, delay, ease: EASE };

  return (
    <section
      className={`${outfit.className} mx-auto flex h-[797px] w-[1440px] gap-5 bg-white px-28 py-[100px]`}
    >
      <div className="flex h-[597px] w-[1216px] flex-col gap-5">
        <p className="h-[30px] w-[484px] text-xl leading-[30px] text-neutral-600">
          Explore our classes and master trending skills!
        </p>
        <h2 className="h-[38px] w-[528px] text-[32px] font-bold leading-[38px] tracking-tight text-[#1F2937]">
          Dive Into{" "}
          <span className="text-[#1DA077]">What&apos;s Hot Right Now!</span> 🔥
        </h2>

        <div className="mt-6 flex h-[461px] w-[1216px] gap-8" role="tablist">
          {COURSES.map((c) => {
            const isActive = c.id === active;
            // Entering content waits for the card to start growing; leaving content goes fast.
            const enter = t(0.25, 0.45);
            const leave = t(0, 0.2);

            return (
              <motion.button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.id)}
                initial={false}
                animate={{
                  width: isActive ? ACTIVE_W : COMPACT_W,
                  backgroundColor: isActive ? "#C33241" : "#E6E7EE",
                }}
                transition={t(0, 0.65)}
                className="group relative h-[461px] shrink-0 cursor-pointer overflow-visible rounded-[32px] text-left outline-none focus-visible:ring-4 focus-visible:ring-[#C33241]/40"
              >
                {!isActive && (
                  <div className="absolute -top-11 right-16 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="text-lg text-gray-800">Click me!</span>
                    <div className="text-2xl text-gray-800">
                      <ArrowDown />
                    </div>
                  </div>
                )}

                {/* Blink feedback overlay (compact cards only) */}
                {blink && !isActive && (
                  <div className="pointer-events-none absolute inset-0 rounded-[32px] border-2 border-gray-100 bg-blue-100" />
                )}

                {/* Clips content while the card resizes, without clipping the tooltip */}
                <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                  {/* Top-right link */}
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 12,
                    }}
                    transition={isActive ? enter : leave}
                    aria-hidden={!isActive}
                    onClick={() => {
                      setBlink(true);
                      setTimeout(() => setBlink(false), 1000);
                    }}
                    className="absolute right-10 top-[42px] flex items-center gap-3 text-base font-semibold text-white"
                  >
                    View all Courses <ArrowRight />
                  </motion.span>

                  {/* Icons */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 16,
                    }}
                    transition={isActive ? t(0.3, 0.5) : leave}
                    aria-hidden={!isActive}
                    className="absolute left-[66px] top-[107px]"
                  >
                    <Image
                      src="/courses/icons.png"
                      alt="React, social media, Vue.js and design course icons"
                      width={460}
                      height={130}
                      priority
                      className="h-[130px] w-[460px] max-w-none"
                    />
                  </motion.div>

                  {/* Vertical text (compact state) */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 0 : 1,
                      y: isActive ? -16 : 0,
                    }}
                    transition={isActive ? leave : enter}
                    aria-hidden={isActive}
                    className="absolute bottom-[184px] left-16"
                  >
                    <div className="rotate-180 text-[#C33241] [writing-mode:vertical-rl]">
                      <h3 className="whitespace-nowrap text-[28px] font-bold leading-none">
                        {c.title.join(" ")}
                      </h3>
                      <p className="whitespace-nowrap text-lg leading-6 [margin-block-start:0.75rem]">
                        {c.desc.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                    </div>
                  </motion.div>

                  {/* Number: one element that glides between both states */}
                  <motion.div
                    initial={false}
                    animate={{
                      left: isActive ? 64 : 40,
                      bottom: isActive ? 48 : 40,
                      color: isActive ? "#F9EBEC" : "#C33241",
                    }}
                    transition={t(0, 0.65)}
                    className="absolute flex items-end gap-4"
                  >
                    <div className="relative pr-9">
                      <span className="block text-[150px] font-extrabold leading-[0.8] tracking-tighter">
                        {c.count}
                      </span>
                      <Plus className="right-0 top-0 h-9 w-9" />
                    </div>

                    {/* Horizontal title + description (active state) */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -24,
                      }}
                      transition={isActive ? enter : leave}
                      aria-hidden={!isActive}
                      className="flex shrink-0 flex-col gap-3 whitespace-nowrap pb-1 text-white"
                    >
                      <h3 className="text-[32px] font-bold leading-none">
                        {c.title.join(" ")}
                      </h3>
                      <p className="text-lg leading-6">
                        {c.desc.map((l) => (
                          <span key={l} className="block">
                            {l}
                          </span>
                        ))}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
