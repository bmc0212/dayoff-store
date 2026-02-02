'use client';

export default function DayOffStore() {
  const products = [
    {
      name: "Slow Mornings Tee",
      price: 25,
      color: "Cream",
      imageFront: "/images/slow-mornings-front.jpg",
      imageBack: "/images/slow-mornings-back.jpg",
      stripeLink: "https://buy.stripe.com/14AbJ11nH4hOe7Ebzdao801",
      isBestSeller: false
    },
    {
      name: "No Plans Today Tee",
      price: 25,
      color: "Washed Grey",
      imageFront: "/images/no-plans-front.jpg",
      imageBack: "/images/no-plans-back.jpg",
      stripeLink: "https://buy.stripe.com/14AcN50jD01y5B846Lao803",
      isBestSeller: true
    },
    {
      name: "Take It Easy Tee",
      price: 25,
      color: "Cream",
      imageFront: "/images/take-it-easy-front.jpg",
      imageBack: "/images/take-it-easy-back.jpg",
      stripeLink: "https://buy.stripe.com/28E28raYh9C8bZw1YDao802",
      isBestSeller: false
    },
    {
      name: "Just Relax Tee",
      price: 25,
      color: "Sage",
      imageFront: "/images/just-relax-front.jpg",
      imageBack: "/images/just-relax-back.jpg",
      stripeLink: "https://buy.stripe.com/7sY9AT8Q96pW7Jg7iXao804",
      isBestSeller: false
    },
    {
      name: "Day Off Club Tee",
      price: 25,
      color: "Cream",
      imageFront: "/images/day-off-club-front.jpg",
      imageBack: "/images/day-off-club-back.jpg",
      stripeLink: "https://buy.stripe.com/28EaEX1nH9C81kS6eTao800",
      isBestSeller: false
    }
  ];

  const sortedProducts = [...products].sort(
    (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller)
  );

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
<header className="max-w-6xl mx-auto mb-16 relative flex items-center justify-center">
  {/* Center brand name */}
  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-green-700">
    DAYOFF
  </h1>

  {/* Logo on the right */}
  <a
    href="/about"
    className="absolute right-0 transition-opacity duration-200 hover:opacity-80"
  >
    <img
      src="/logo.png"
      alt="DayOff logo"
      className="h-14 w-auto transition-transform duration-200 hover:scale-[1.03]"
    />
     <span className="mt-1 ml-6.5 text-xs text-black tracking-wide hover:underline">
    About
  </span>
  </a>
</header>
<div className="max-w-6xl mx-auto mb-14 text-center">
  <p className="text-sm md:text-base text-black tracking-wide">
    Put-together, without trying.
  </p>
</div>


      <section className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-green-700/80">Shop the Drop</h2>
          <span className="text-sm text-black">Free U.S. shipping over $75</span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedProducts.map((product, i) => (
          <div key={i} className="rounded-2xl bg-white p-6 group transition-all duration-200 hover:shadow-md">
            <div className="h-56 bg-neutral-100 rounded-xl mb-4 overflow-hidden relative group">
  <img
    src={product.imageBack}
    alt={`${product.name} back`}
    className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
  />
  <img
    src={product.imageFront}
    alt={`${product.name} front`}
    className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
  />
</div>


            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-medium tracking-tight text-green-700">{product.name}</h3>
              {product.isBestSeller && (
                <span className="text-xs bg-neutral-900 text-white px-2 py-0.5 rounded-full">
                  Best Seller
                </span>
              )}
            </div>

            <p className="text-sm text-neutral-500">{product.color}</p>

            <div className="flex items-center justify-between mt-4">
              <span className="font-medium text-green-700/80">${product.price}</span>
              <a
                href={product.stripeLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-neutral-900 text-white rounded-xl"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </section>
      <footer className="mt-24 border-t border-neutral-200">
  <div className="max-w-6xl mx-auto px-6 py-12 text-center">
    <p className="text-sm font-medium text-black mb-4">
      DAYOFF
    </p>

    <div className="flex justify-center gap-6 text-sm text-black">
      <a href="/shipping" className="hover:underline">
  Shipping
</a>
      <a href="/returns" className="hover:underline">
  Returns
</a>
      <a href="/contact" className="hover:underline">
  Contact
</a>
    </div>

    <p className="mt-6 text-xs text-black/60">
      © {new Date().getFullYear()} DayOff. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
}
