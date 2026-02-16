"use client";

import { ShoppingBag } from "lucide-react";

export default function Navbar({ cartLength, openCart }: { cartLength: number; openCart: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left */}
       <div className="text-sm tracking-wide text-black">
  <a href="/about" className="text-black hover:opacity-70 transition">
    About
  </a>
</div>

        {/* Center Brand */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-bold tracking-tight text-black">
  DAYOFF
</h1>
        </div>

        {/* Right Bag */}
       <button
  onClick={openCart}
  className="relative text-black hover:opacity-70 transition"
>
          <ShoppingBag size={20} />

          {cartLength > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1.5">
              {cartLength}
            </span>
          )}
        </button>

      </div>
    </header>
  );
}