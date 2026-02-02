"use client";

import { useState } from "react";

export default function DayOffStore() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [cart, setCart] = useState<
  {
    name: string;
    size: string;
    price: number;
    quantity: number;
  }[]
>([]);
const [isCartOpen, setIsCartOpen] = useState(false);
  const products = [
    {
      name: "Slow Mornings Tee",
      price: 25,
      color: "Cream",
       fit: "Relaxed fit · Heavyweight cotton",
       sizes: ["S", "M", "L", "XL"],
      imageFront: "/images/slow-mornings-front.jpg",
      imageBack: "/images/slow-mornings-back.jpg",
      stripeLink: "https://buy.stripe.com/14AbJ11nH4hOe7Ebzdao801",
      isBestSeller: false
    },
    {
      name: "No Plans Today Tee",
      price: 25,
      color: "Washed Grey",
      fit: "Relaxed fit · Garment-dyed",
      sizes: ["S", "M", "L", "XL"],
      imageFront: "/images/no-plans-front.jpg",
      imageBack: "/images/no-plans-back.jpg",
      stripeLink: "https://buy.stripe.com/14AcN50jD01y5B846Lao803",
      isBestSeller: true
    },
    {
      name: "Take It Easy Tee",
      price: 25,
      color: "Cream",
      fit: "Relaxed fit · Soft-washed cotton",
      sizes: ["S", "M", "L", "XL"],
      imageFront: "/images/take-it-easy-front.jpg",
      imageBack: "/images/take-it-easy-back.jpg",
      stripeLink: "https://buy.stripe.com/28E28raYh9C8bZw1YDao802",
      isBestSeller: false
    },
    {
      name: "Just Relax Tee",
      price: 25,
      color: "Sage",
      fit: "Relaxed fit · Everyday weight",
      sizes: ["S", "M", "L", "XL"],
      imageFront: "/images/just-relax-front.jpg",
      imageBack: "/images/just-relax-back.jpg",
      stripeLink: "https://buy.stripe.com/7sY9AT8Q96pW7Jg7iXao804",
      isBestSeller: false
    },
    {
      name: "Day Off Club Tee",
      price: 25,
      color: "Cream",
      fit: "Relaxed fit · Premium cotton",
      sizes: ["S", "M", "L", "XL"],
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

  {/* Logo + About + Cart (top right) */}
  <div className="absolute right-0 flex flex-col items-center">
    <a
      href="/about"
      className="flex flex-col items-center transition-opacity duration-200 hover:opacity-80"
    >
      <img
        src="/logo.png"
        alt="DayOff logo"
        className="h-12 w-auto transition-transform duration-200 hover:scale-[1.03]"
      />
      <span className="mt-1 text-xs text-black tracking-wide hover:underline">
        About
      </span>
    </a>

    <button
      onClick={() => setIsCartOpen(true)}
      className="mt-2 text-xs text-black hover:underline"
    >
      Cart ({cart.length})
    </button>
  </div>
</header>



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
              <h3 className="text-[17px] font-medium tracking-tight text-green-700">{product.name}
                <p className="mt-1 text-xs text-black/70 tracking-wide">
  {product.fit}
</p>
              </h3>
              {product.isBestSeller && (
                <span className="text-xs bg-neutral-900 text-white px-2 py-0.5 rounded-full">
                  Best Seller
                </span>
              )}
            </div>

            <p className="text-sm text-neutral-500">{product.color}</p>
<div className="mt-3 flex gap-2">
  {product.sizes.map((size) => (
    <button
      key={size}
      onClick={() =>
        setSelectedSizes({
          ...selectedSizes,
          [product.name]: size,
        })
      }
      className={`px-3 py-1 text-xs rounded-md border transition
        ${
          selectedSizes[product.name] === size
            ? "border-black bg-black text-white"
            : "border-neutral-300 text-black hover:border-black"
        }
      `}
    >
      {size}
    </button>
  ))}
</div>
            <div className="flex items-center justify-between mt-4">
              <span className="font-medium text-green-700/80">${product.price}</span>
             <button
  onClick={() => {
    const size = selectedSizes[product.name];
    if (!size) return;

    setCart([
      ...cart,
      {
        name: product.name,
        size,
        price: product.price,
        quantity: 1,
      },
    ]);
  }}
  disabled={!selectedSizes[product.name]}
  className={`px-4 py-2 rounded-xl transition ${
    selectedSizes[product.name]
      ? "bg-neutral-900 text-white hover:bg-black"
      : "bg-neutral-300 text-neutral-500 cursor-not-allowed"
  }`}
>
  Add to Cart
</button>

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
{/* Cart Drawer */}
{isCartOpen && (
  <div className="fixed inset-0 z-50 flex justify-end">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/30"
      onClick={() => setIsCartOpen(false)}
    />

    {/* Drawer */}
    <div className="relative w-full max-w-sm bg-white h-full p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-black">Your Cart</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-sm hover:underline"
        >
          Close
        </button>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p className="text-sm text-black">Your cart is empty.</p>
      ) : (
        <div className="flex-1 space-y-4 overflow-y-auto">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-3"
            >
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-black">
                  Size {item.size}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-black">${item.price}</span>
                <button
                  onClick={() =>
                    setCart(cart.filter((_, i) => i !== index))
                  }
                  className="text-xs text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Footer */}
      {cart.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <button
            className="w-full bg-neutral-900 text-white py-3 rounded-xl hover:bg-black transition"
            onClick={() => alert("Stripe checkout comes next")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
}
