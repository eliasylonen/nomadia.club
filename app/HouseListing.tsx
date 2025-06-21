import Image from "next/image";

export const HouseListing = ({
  imageUrls,
  title,
  isFull,
  airbnbUrl,
}: {
  imageUrls: string[];
  title: string;
  isFull?: boolean;
  airbnbUrl: string;
}) => (
  <div className={isFull ? "opacity-35" : ""}>
    <h2 className="px-5 pt-16 pb-5 leading-none">
      {title}
      {isFull && <>&nbsp;(Fully booked)</>}
    </h2>
    <div className="max-w-2xl overflow-x-auto flex snap-x snap-mandatory scrollbar-hidden scrollbar-hide">
      {imageUrls.map((src, index) => (
        <div key={index} className="snap-start pl-5 shrink-0 max-sm:last:pr-5">
          <Image
            src={src}
            alt={`nomadia.club ${title} picture ${index + 1}`}
            width={240}
            height={240}
            className="h-64 w-64 object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);
