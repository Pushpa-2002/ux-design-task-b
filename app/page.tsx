import PageNav from "@/components/PageNav";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[1440px] px-6 py-10 lg:px-14">
        <ServiceSection />
      </main>
      <PageNav current={1} />
    </>
  );
}
