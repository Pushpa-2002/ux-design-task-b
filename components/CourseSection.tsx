import { Flame } from "lucide-react";
import SectionLabel from "./SectionLabel";
import StatPanel from "./StatPanel";

export default function CourseSection() {
  return (
    <section>
      <SectionLabel>Course</SectionLabel>

      <div className="rounded-2xl bg-card p-8 text-card-ink sm:p-10">
        <p className="text-sm text-card-muted">
          Explore our classes and master trending skills!
        </p>
        <h2 className="mt-1 flex items-center gap-1.5 text-base font-semibold sm:text-lg">
          Dive Into
          <span className="text-success">What&apos;s Hot Right Now!</span>
          <Flame className="h-4 w-4 text-orange-500" />
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl bg-feature p-6 text-white sm:row-span-2 sm:p-8">
            <div className="mb-6 flex gap-3">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20"
                >
                  ⭐
                </span>
              ))}
            </div>

            <p className="text-xs text-white/70">View all Courses →</p>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-display leading-none">
                23<span className="text-4xl align-super">+</span>
              </span>
              <div className="pb-2">
                <p className="text-sm font-semibold">All Courses</p>
                <p className="text-xs text-white/70">
                  courses you&apos;re preparing through right now
                </p>
              </div>
            </div>
          </div>

          <StatPanel
            number="05"
            label="Upcoming Courses"
            sub="courses you will be getting through very soon"
          />
          <StatPanel
            number="10"
            label="Ongoing Courses"
            sub="courses you already have to get started"
          />
        </div>
      </div>
    </section>
  );
}
