export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-8">
          Returns
        </h1>

        <p className="text-base md:text-lg text-black leading-relaxed mb-6">
          We accept returns within 14 days of delivery.
        </p>

        <p className="text-base md:text-lg text-black leading-relaxed mb-6">
          Items must be unworn, unwashed, and in original condition.
        </p>

        <p className="text-base md:text-lg text-black leading-relaxed">
          To start a return, please contact us with your order number.
        </p>
      </div>
    </div>
  );
}
