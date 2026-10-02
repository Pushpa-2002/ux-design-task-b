import Image from "next/image";

export default function ImageCarousel({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  return (
    <div className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
      {items?.map((img, idx) => (
        <div
          key={idx}
          className="relative h-87.5 w-[85%] shrink-0 snap-start overflow-hidden rounded-[21px] sm:h-112.5 md:h-125 md:w-253"
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
  );
}
