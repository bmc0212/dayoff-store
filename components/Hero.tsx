import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      
      {/* Background Image */}
     <Image
  src="/hero.jpg"
  alt="DayOff sunrise NYC balcony"
  fill
  priority
  className="
    object-cover
    object-[center_25%]
    md:object-[center_15%]
  "
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Clickable Brand */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <Link
          href="#shop-section"
          className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-full after:bg-white hover:opacity-80 transition"
        >
          SHOP
        </Link>
      </div>

    </section>
  );
}