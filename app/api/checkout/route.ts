import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: "No items provided" },
        { status: 400 }
      );
    }

    const FREE_SHIPPING_THRESHOLD = 75;

const shippingRateId =
  body.cartTotal >= FREE_SHIPPING_THRESHOLD
    ? "shr_1SzX5qEIwxz2SPmIALiYGj4A"
    : "shr_1SwsJnEIwxz2SPmI8pS0TjWO";

const session = await stripe.checkout.sessions.create({
  mode: "payment",
  line_items: body.items,

  shipping_address_collection: {
    allowed_countries: ["US"],
  },

  shipping_options: [
    {
      shipping_rate: shippingRateId,
    },
  ],

  phone_number_collection: {
    enabled: true,
  },

  success_url: `${req.headers.get("origin")}/success`,
  cancel_url: `${req.headers.get("origin")}`,
});


    return NextResponse.json({
      url: session.url,
    });
  } catch (err: any) {
    console.error("Stripe error:", err);

    return NextResponse.json(
      { error: err.message || "Stripe checkout failed" },
      { status: 500 }
    );
  }
}
