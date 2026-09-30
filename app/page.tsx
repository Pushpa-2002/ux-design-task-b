import ServiceSection from "@/components/ServiceSection";
import CourseSection from "@/components/CourseSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-2 xl:gap-6">
        <ServiceSection />
        <CourseSection />
      </div>
    </main>
  );
}
