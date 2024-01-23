"use client";

import { Messages } from "@/constants";
import { IEvents } from "@/lib/database/models/events.model";

import { SignedIn, useUser, SignedOut } from "@clerk/nextjs";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Checkout } from "./Checkout";

type CheckoutButtonProps = {
  event: IEvents;
};
const CheckoutButton = ({ event }: CheckoutButtonProps) => {
  const { user } = useUser();
  const userId = user?.publicMetadata?.userId as string;
  const isFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {!isFinished ? (
        <p className="text-red-400 p-regular-14 bg-primary-500/10 border-primary-500 p-5 text-center rounded-md">
          {Messages.EVENT_CLOSED_TEXT}
        </p>
      ) : (
        <>
          <SignedOut>
            <Button
              id="get__tickets"
              asChild
              className="button rounded-full"
              size="lg">
              <Link href="/sign-in">{Messages.GET_TICKET_BUTTON_TEXT}</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
