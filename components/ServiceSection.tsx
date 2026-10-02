import Image from "next/image";
import SectionLabel from "./SectionLabel";
import HeadingRotator from "./HeadingRotator";
import ImageCarousel from "./ImageCarousel";

const IMAGES = [
  { src: "/service-laptop.png", alt: "Workspace with laptop" },
  { src: "/service-tablet.jpg", alt: "Tablet on desk" },
  { src: "/service-laptop.png", alt: "Workspace with laptop" },
  { src: "/service-tablet.jpg", alt: "Detail shot" },
];

const PARTNERS = [
  { name: "Airtel", src: "/partners/airtel.png" },
  { name: "CMC", src: "/partners/cmc.png" },
  { name: "S&P", src: "/partners/sp.png" },
  { name: "Zebec", src: "/partners/zebec.png" },
];

export default function ServiceSection() {
  return (
    <section>
      <SectionLabel>service</SectionLabel>

      <div className="rounded-2xl bg-card p-8 text-card-ink sm:p-10 lg:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-around w-[1218px] h-[306px] py-2">
          <div className="w-304.5">
            <p className="text-wrap! w-[625px] text-4xl! font-medium!  sm:text-lg">
              Experience our expert solutions tailored to enhance your business
              with top-tier design, development, and animation.
            </p>
            <button className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-cta px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-cta-hover">
              Services
            </button>
          </div>
          <HeadingRotator />
        </div>

        <ImageCarousel items={IMAGES} />

        <div className="mt-14 h-[7px] rounded-full bg-divider" />

        <div className="mt-10">
          <p className="text-center text-xs text-card-muted">Our Partners</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {PARTNERS.map((p) => (
              <div key={p.name} className="relative h-10 w-28 opacity-80">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
