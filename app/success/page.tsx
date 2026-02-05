"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center">
        <h1 className="text-2xl font-semibold text-black mb-4">
          Thank you for your order
        </h1>

        <p className="text-sm text-black mb-6">
          Your purchase was successful. We’ve received your order and it’s being prepared for production.
        </p>

        <p className="text-sm text-black mb-8">
          You’ll receive a confirmation email shortly with your order details.
        </p>

        <Link
          href="/"
          className="inline-block w-full bg-neutral-900 text-white py-3 rounded-xl hover:bg-black transition"
        >
          Back to store
        </Link>
      </div>
    </div>
  );
}
