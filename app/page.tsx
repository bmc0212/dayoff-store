export default function DayOffStore() {
  const products = [
    {
      name: "Slow Mornings Tee",
      price: 34,
      color: "Cream",
      imageFront: "/images/slow-mornings-front.jpg",
      imageBack: "/images/slow-mornings-back.jpg",
      stripeLink: "https://buy.stripe.com/test_slowmornings",
      isBestSeller: false
    },
    {
      name: "No Plans Today Tee",
      price: 34,
      color: "Washed Grey",
      imageFront: "/images/no-plans-front.jpg",
      imageBack: "/images/no-plans-back.jpg",
      stripeLink: "https://buy.stripe.com/test_noplanstoday",
      isBestSeller: true
    },
    {
      name: "Take It Easy Tee",
      price: 34,
      color: "Cream",
      imageFront: "/images/take-it-easy-front.jpg",
      imageBack: "/images/take-it-easy-back.jpg",
      stripeLink: "https://buy.stripe.com/test_takeiteasy",
      isBestSeller: false
    },
    {
      name: "Just Relax Tee",
      price: 34,
      color: "Sage",
      imageFront: "/images/just-relax-front.jpg",
      imageBack: "/images/just-relax-back.jpg",
      stripeLink: "https://buy.stripe.com/test_justrelax",
      isBestSeller: false
    },
    {
      name: "Day Off Club Tee",
      price: 36,
      color: "Cream",
      imageFront: "/images/day-off-club-front.jpg",
      imageBack: "/images/day-off-club-back.jpg",
      stripeLink: "https://buy.stripe.com/test_dayoffclub",
      isBestSeller: false
    }
  ];

  const sortedProducts = [...products].sort(
    (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller)
  );

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <header className="max-w-6xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">DAYOFF</h1>
        <p className="max-w-3xl mx-auto text-neutral-600 text-base md:text-lg mb-10">
          DayOff is about looking put-together without trying too hard. Clothes you throw on for class, errands, travel, or chilling — but still feel confident wearing out. No loud flexing. Just clean graphics, premium comfort, and easy silhouettes.
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-72 bg-neutral-100 rounded-2xl overflow-hidden">
            <img
              src="/images/no-plans-front.jpg"
              alt="No Plans Today Tee front"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          <div className="text-left">
            <span className="inline-block text-xs bg-neutral-900 text-white px-2 py-1 rounded-full mb-3">
              Best Seller
            </span>
            <h2 className="text-2xl font-semibold mb-2">No Plans Today Tee</h2>
            <p className="text-neutral-600 mb-4">
              Our most-loved tee. Washed cotton, relaxed fit, and built for days with no schedule.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium">$34</span>
              <a
                href="https://buy.stripe.com/test_noplanstoday"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-neutral-900 text-white rounded-xl inline-block"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Shop the Drop</h2>
          <span className="text-sm text-neutral-500">Free U.S. shipping over $75</span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedProducts.map((product, i) => (
          <div key={i} className="rounded-2xl shadow-sm bg-white p-5 group">
            <div className="h-56 bg-neutral-100 rounded-xl mb-4 overflow-hidden relative">
              <img
                src={product.imageFront}
                alt={`${product.name} front`}
                className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={product.imageBack}
                alt={`${product.name} back`}
                className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              {product.isBestSeller && (
                <span className="text-xs bg-neutral-900 text-white px-2 py-0.5 rounded-full">
                  Best Seller
                </span>
              )}
            </div>

            <p className="text-sm text-neutral-500">{product.color}</p>

            <div className="flex items-center justify-between mt-4">
              <span className="font-medium">${product.price}</span>
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
    </div>
  );
}
