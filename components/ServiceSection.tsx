import Image from "next/image";
import SectionLabel from "./SectionLabel";

const HEADINGS = ["UI & UX", "Development", "Blockchain"];

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

      <div className="rounded-2xl bg-card p-8 text-card-ink sm:p-10">
        {/* Top row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="text-base leading-relaxed sm:text-lg">
              Experience our expert solutions tailored to enhance your business
              with top-tier design, development, and animation.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-cta px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-cta-hover"
            >
              Contact
            </button>
          </div>

          <ul className="text-h1 flex flex-col gap-1 lg:text-right">
            {HEADINGS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        {/* Image carousel */}
        <div className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative h-[400px] w-[80%] shrink-0 snap-start overflow-hidden rounded-[21px] sm:h-[500px] md:h-[569px] md:w-[1012px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="1012px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 h-[7px] rounded-full bg-divider" />

        {/* Partners */}
        <div className="mt-10">
          <p className="text-center text-xs text-card-muted">Our Partners</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {PARTNERS.map((p) => (
              <div key={p.name} className="relative h-8 w-24 opacity-80">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="96px"
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
