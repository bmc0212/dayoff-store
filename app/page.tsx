"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
const PRICE_MAP: Record<string, Record<string, string>> = {
  "No Plans Today Tee": {
    S: "price_1Swbd7EIwxz2SPmIXhJN5SRs",
    M: "price_1SxMH3EIwxz2SPmI8AfW3Jln",
    L: "price_1SxMGkEIwxz2SPmITgDQqswJ",
    XL: "price_1SwbeREIwxz2SPmI4ozIpSr3",
  },
  "Slow Mornings Tee": {
    S: "price_1SxMCLEIwxz2SPmIgFYf9nBz",
    M: "price_1Swbb2EIwxz2SPmIBoW5yRNd",
    L: "price_1SxME9EIwxz2SPmINNbTm0Gr",
    XL: "price_1SwbaSEIwxz2SPmI9LPx8AKp",
  },
  "Take It Easy Tee": {
    S: "price_1SwTWkEIwxz2SPmIwk8II4BD",
    M: "price_1SwsvUEIwxz2SPmIWOZb4msd",
    L: "price_1SwTWkEIwxz2SPmIAk4rWkAv",
    XL: "price_1SwTWkEIwxz2SPmI70t2a2es",
  },
  "Just Relax Tee": {
    S: "price_1SwbeyEIwxz2SPmIZl0vTigJ",
    M: "price_1Swbf8EIwxz2SPmI3sTwCENi",
    L: "price_1SwbfKEIwxz2SPmINd7TFJ7O",
    XL: "price_1SxMIlEIwxz2SPmIiwz5XDua",
  },
  "Day Off Club Tee": {
    S: "price_1SwbgxEIwxz2SPmIDmCwrnCV",
    M: "price_1Swbh7EIwxz2SPmIRRIhlVD4",
    L: "price_1SwbhGEIwxz2SPmISmXYNaDV",
    XL: "price_1SxMKhEIwxz2SPmIH3mWKHJt",
  },
  "DAYOFF Hoodie": {
  S: "price_xxx",
  M: "price_xxx",
  L: "price_xxx",
  XL: "price_xxx",
},
};

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
const [addedMessage, setAddedMessage] = useState<string | null>(null);
const [isCartOpen, setIsCartOpen] = useState(false);
const [showMiniCart, setShowMiniCart] = useState(false);
const [subscribed, setSubscribed] = useState(false);
const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
const FREE_SHIPPING_THRESHOLD = 75;

const cartTotal = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const amountRemaining = Math.max(
  FREE_SHIPPING_THRESHOLD - cartTotal,
  0
);

const progressPercentage = Math.min(
  (cartTotal / FREE_SHIPPING_THRESHOLD) * 100,
  100
);
 const hasCelebrated = useRef(false);

  useEffect(() => {
    if (
      cartTotal >= FREE_SHIPPING_THRESHOLD &&
      !hasCelebrated.current
    ) {
      hasCelebrated.current = true;

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
      });
    }

    if (cartTotal < FREE_SHIPPING_THRESHOLD) {
      hasCelebrated.current = false;
    }
  }, [cartTotal]);
  type TeeProduct = {
  name: string;
  price: number;
  color: string;
  fit: string;
  sizes: string[];
  imageFront: string;
  imageBack: string;
  stripeLink: string;
  isBestSeller: boolean;
};

type HoodieProduct = {
  name: string;
  price: number;
  fit: string;
  sizes: string[];
  isBestSeller: boolean;
  colors: {
    [key: string]: {
      imageFront: string;
      imageBack: string;
    };
  };
};

type Product = TeeProduct | HoodieProduct;

  const products: Product[] = [
    {
      name: "Slow Mornings Tee",
      price: 30,
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
      price: 30,
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
      price: 30,
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
      price: 30,
      color: "White",
      fit: "Relaxed fit · Everyday weight",
      sizes: ["S", "M", "L", "XL"],
      imageFront: "/images/just-relax-front.jpg",
      imageBack: "/images/just-relax-back.jpg",
      stripeLink: "https://buy.stripe.com/7sY9AT8Q96pW7Jg7iXao804",
      isBestSeller: false
    },
    {
      name: "Day Off Club Tee",
      price: 30,
      color: "White",
      fit: "Relaxed fit · Premium cotton",
      sizes: ["S", "M", "L", "XL"],
      imageFront: "/images/day-off-club-front.jpg",
      imageBack: "/images/day-off-club-back.jpg",
      stripeLink: "https://buy.stripe.com/28EaEX1nH9C81kS6eTao800",
      isBestSeller: false
    },
    {
  name: "DAYOFF Hoodie",
  price: 60,
  fit: "Relaxed fit · Heavyweight fleece",
  sizes: ["S", "M", "L", "XL"],
  isBestSeller: false,
  colors: {
    Bone: {
      imageFront: "/images/bone-front.jpg",
      imageBack: "/images/bone-back.jpg",
    },
    Charcoal: {
      imageFront: "/images/charcoal-front.jpg",
      imageBack: "/images/charcoal-back.jpg",
    },
  },
}
  ];

  const sortedProducts = [...products].sort(
    (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller)
  );

  return (
  <>
  <Navbar cartLength={cart.length} openCart={() => setIsCartOpen(true)} />
    <Hero />

    <div 
    className="min-h-screen bg-white px-12 py-32">

{/* 🔥 QUOTE SECTION BELOW HEADER */}
<section className="pb-24 px-12 bg-white text-black text-center">
  <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
    Built for the Off Days.
  </h2>
</section>
<section className="py-32 px-6 sm:px-10 md:px-16 grid md:grid-cols-2 gap-24 items-center bg-white">
  <div>
    <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
      Designed With Intention.
    </h2>
  </div>

  <div>
    <p className="text-lg text-black opacity-70 leading-relaxed">
      DayOff is built around balance. Elevated fabrics. Relaxed silhouettes.
      Timeless essentials made for the moments between the moments.
    </p>
  </div>
</section>
<section className="py-32 px-6 sm:px-10 md:px-16 bg-neutral-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20 text-center">

    <div>
      <h3 className="text-xl font-semibold tracking-tight text-black">
        Premium Fabrics
      </h3>
      <p className="mt-6 text-sm text-black opacity-70 leading-relaxed">
        Heavyweight cotton designed to soften over time and hold its structure.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold tracking-tight text-black">
        Relaxed Structure
      </h3>
      <p className="mt-6 text-sm text-black opacity-70 leading-relaxed">
        Tailored for comfort without sacrificing presence.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold tracking-tight text-black">
        Timeless Design
      </h3>
      <p className="mt-6 text-sm text-black opacity-70 leading-relaxed">
        Minimal graphics built to last beyond trends and seasons.
      </p>
    </div>

  </div>
</section>

      <section className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl font-light tracking-[0.2em] text-black">The Collection</h2>
          <span className="text-sm text-black">Free U.S. shipping over $75</span>
        </div>
      </section>

      <section 
      id="shop-section"
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {sortedProducts.map((product, i) => {

  const hasColors = "colors" in product;

  let selectedColor;
  let colorData;

  if ("colors" in product) {
    const colorKeys = Object.keys(product.colors);

    selectedColor =
      selectedColors[product.name] || colorKeys[0];

    colorData = product.colors[selectedColor];
  }

  return (
    <div key={i} className="group">
           <div className="mb-6 overflow-hidden relative group cursor-pointer aspect-[4/5]">

  {"colors" in product && colorData ? (
    <>
      {/* Hoodie Back */}
      <img
        src={colorData.imageBack}
        alt={`${product.name} back`}
        className="absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
      />

      {/* Hoodie Front */}
      <img
        src={colorData.imageFront}
        alt={`${product.name} front`}
        className="absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-105"
      />
    </>
  ) : (
    (() => {
      const tee = product as TeeProduct;

      return (
        <>
          {/* Tee Back */}
          <img
            src={tee.imageBack}
            alt={`${tee.name} back`}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
          />

          {/* Tee Front */}
          <img
            src={tee.imageFront}
            alt={`${tee.name} front`}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-105"
          />
        </>
      );
    })()
  )}

</div>


            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold tracking-tight text-black">{product.name}
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

           {"color" in product && (
  <p className="text-sm text-neutral-500">{product.color}</p>
)}
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
{hasColors && (
  <div className="mt-4 flex gap-3">
    {Object.keys(product.colors).map((color) => (
      <button
        key={color}
        onClick={() =>
          setSelectedColors({
            ...selectedColors,
            [product.name]: color,
          })
        }
        className={`px-4 py-1 text-xs border transition
          ${
            selectedColors[product.name] === color
              ? "border-black bg-black text-white"
              : "border-neutral-300 text-black hover:border-black"
          }
        `}
      >
        {color}
      </button>
    ))}
  </div>
)}
            <div className="flex items-center justify-between mt-4">
              <span className="font-medium text-black">${product.price}</span>
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

    setShowMiniCart(true);

    setTimeout(() => {
      setShowMiniCart(false);
    }, 2000);
  }}
  disabled={!selectedSizes[product.name]}
  className={`px-4 py-2 rounded-none transition ${
    selectedSizes[product.name]
      ? "border border-black text-black hover:bg-black hover:text-white"
      : "bg-neutral-300 text-black cursor-not-allowed"
  }`}
>
  Add to Cart
</button>
            </div>
          </div>
          );
        })}
      </section>

      <div className="h-px bg-neutral-200 w-full" />

      <section className="mt-32 py-40 px-6 sm:px-10 md:px-16 bg-black text-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">

    <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
      Effort Looks Better
      <br />
      When It’s Effortless.
    </h2>

    <p className="text-lg opacity-70 leading-relaxed">
      Designed to move seamlessly between slow mornings and late evenings.
      Elevated essentials made to carry presence without trying.
    </p>

  </div>
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
  <footer className="mt-24 border-t border-neutral-200"></footer>
  <section className="py-32 px-6 sm:px-10 md:px-16 text-center bg-white">
  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
    Stay in the Loop.
  </h3>

  <p className="mt-6 text-sm text-black opacity-60">
    Be the first to know about new releases and drops.
  </p>

  <form
    onSubmit={async (e) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;

  await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  form.reset();
  setSubscribed(true);

  setTimeout(() => {
    setSubscribed(false);
  }, 3000);
}}
    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
  >
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="border border-black px-6 py-3 w-80 text-sm text-black placeholder-black focus:outline-none"
    />

    <button
      type="submit"
      className="ml-4 border border-black text-black px-6 py-3 text-sm hover:bg-black hover:text-white transition"
    >
      Subscribe
    </button>
  </form>
  {subscribed && (
  <p className="mt-6 text-sm text-black opacity-70">
    You’re in.
  </p>
)}
</section>
</footer>
{/* Cart Drawer */}
{isCartOpen && (
  <div className="fixed inset-0 z-50 flex justify-end">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/30 z-40"
      onClick={() => setIsCartOpen(false)}
    />

    {/* Drawer */}
    <div className="relative z-50 w-full max-w-sm bg-white h-full p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-black">Your Cart</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-sm hover:underline text-black"
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
                <p className="text-sm font-medium text-black">{item.name}</p>
               <p className="text-xs text-black">
  Size: <span className="font-medium text-black">{item.size}</span>
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

    {/* 🔥 FREE SHIPPING TRACKER */}
    <div className="mb-4">
      {cartTotal < FREE_SHIPPING_THRESHOLD ? (
        <p className="text-sm text-black mb-2">
          You’re <span className="font-medium">${amountRemaining}</span> away from free shipping.
        </p>
      ) : (
        <p className="text-sm text-black font-medium mb-2">
          You’ve unlocked free shipping 🎉
        </p>
      )}

      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>

    {/* Existing Checkout Button */}
    <button
      className="w-full border border-black text-black py-4 text-sm tracking-[0.2em] hover:bg-black hover:text-white transition"
  onClick={async () => {
    const items = cart
      .map((item) => {
        const priceId = PRICE_MAP[item.name]?.[item.size];

        if (!priceId) return null;

        return {
          price: priceId,
          quantity: item.quantity,
        };
      })
      .filter(Boolean);

    if (items.length === 0) {
      alert("Cart items missing Stripe prices.");
      return;
    }

   const res = await fetch("/api/checkout", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    items,
    cartTotal,
  }),
});

const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Checkout failed");
    }
  }}
>
  Checkout
</button>


        </div>
      )}
    </div>
  </div>
)}
{addedMessage && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white px-4 py-2 rounded-full text-sm shadow-lg">
    {addedMessage}
  </div>
)}
{showMiniCart && (
  <div
    className="
      fixed top-24 right-6 z-50
      w-80 bg-white border border-black
      p-6 shadow-lg
      transition-transform duration-500
    "
  >
    <p className="text-xs tracking-[0.2em] text-black mb-3">
      ADDED TO CART
    </p>

    <p className="text-sm font-medium text-black">
      {cart[cart.length - 1]?.name}
    </p>

    <button
      onClick={() => setIsCartOpen(true)}
      className="mt-4 text-sm tracking-wide text-black hover:opacity-70 transition"
    >
      VIEW CART
    </button>
  </div>
)}
       </div>
       {cart.length > 0 && (
  <button
    onClick={() => setIsCartOpen(true)}
    className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 md:px-6 md:py-4 text-sm tracking-wide shadow-lg"
  >
    CART ({cart.length})
  </button>
)}
  </>
);
}
