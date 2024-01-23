import { IEvents } from "@/lib/database/models/events.model";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Messages } from "@/constants";
import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "@/lib/actions/order.action";
type CheckoutProps = {
  event: IEvents;
  userId: string;
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const Checkout = ({ event, userId }: CheckoutProps) => {
  const onCheckout = async () => {
    console.log("Checkout");
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      isFree: event.isFree.valueOf(),
      price: event.price,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form action={onCheckout} method="post">
      <Button
        className="button rounded-full sm:w-fit"
        size="lg"
        type="submit"
        role="checkout">
        {event.isFree
          ? Messages.CONFIRM_YOUR_SEAT
          : Messages.PURCHASE_YOUR_SLOT}
      </Button>
    </form>
  );
};
