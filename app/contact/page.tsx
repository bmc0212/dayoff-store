export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-8">
          Contact
        </h1>

        <p className="text-base md:text-lg text-black leading-relaxed mb-6">
          For questions about orders, sizing, or general inquiries, reach out anytime.
        </p>

        <p className="text-base md:text-lg text-black leading-relaxed">
          Email us at{" "}
          <a
            href="mailto:dayoffbrandhelp@gmail.com"
            className="underline"
          >
            dayoffbrandhelp@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
