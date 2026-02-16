import Image from "next/image";
 import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="DayOff sunrise NYC balcony"
        fill
        priority
        className="object-cover-[center_5%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-light tracking-wide">
          DAYOFF
        </h1>

        <p className="mt-6 text-lg md:text-xl font-light tracking-wider">
          Elevated essentials for the off days.
        </p>

      <div className="mt-10">

<Link
  href="#shop-section"
  className="border border-white px-8 py-3 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition"
>
  SHOP
</Link>
</div>
      </div>
    </section>
  );
}