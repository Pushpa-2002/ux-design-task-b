import CourseSection from "@/components/CourseSection";
import PageNav from "@/components/PageNav";

export default function CoursePage() {
  return (
    <>
      <main className="mx-auto max-w-[1440px] h-[797px] px-6 py-10 lg:px-14">
        <CourseSection />
      </main>
      <PageNav current={2} />
    </>
  );
}
