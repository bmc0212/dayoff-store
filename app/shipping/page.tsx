export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-8">
          Shipping
        </h1>

        <p className="text-base md:text-lg text-black leading-relaxed mb-6">
          Orders are typically processed within 2–4 business days.
        </p>

        <p className="text-base md:text-lg text-black leading-relaxed mb-6">
          Once shipped, delivery usually takes 3–7 business days depending on your location.
        </p>

        <p className="text-base md:text-lg text-black leading-relaxed">
          You’ll receive a confirmation email with tracking information as soon as your order ships.
        </p>
      </div>
    </div>
  );
}
