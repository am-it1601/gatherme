import Collection from "@/components/event/Collection";
import { Button } from "@/components/ui/button";
import { Messages } from "@/constants";
import { getEventsByUser } from "@/lib/actions/event.action";
import { getOrdersByUser } from "@/lib/actions/order.action";
import { auth } from "@clerk/nextjs";

import Link from "next/link";
import React from "react";
import { IOrder } from "../../../lib/database/models/orders.model";
import { SearchParamProps } from "@/types";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const ordersPage = Number(searchParams?.orderPage) || 1;
  const eventPage = Number(searchParams?.eventPage) || 1;
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  console.log(`User ${userId}`);
  const orders = await getOrdersByUser({
    userId,
    page: ordersPage,
  });

  const myEvents = orders?.data.map((order: IOrder) => order.event || []);
  const organizedEvents = await getEventsByUser({ userId, page: eventPage });
  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button size="lg" asChild className="button hidden sm:flex">
            <Link href="/#events">Explore more Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={myEvents}
          titleIfEmpty={Messages.NO_EVENT_DATA}
          messageIfEmpty={Messages.NO_EVENT_DATA_SUBTEXT}
          collectionType={"USER"}
          limit={6}
          page={ordersPage}
          totalPages={orders?.totalPages}
          urlParamName="ordersPage"
        />
      </section>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Event Organized</h3>
          <Button size="lg" asChild className="button hidden sm:flex">
            <Link href="/event/create">Create your Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          titleIfEmpty={Messages.NO_EVENT_DATA}
          messageIfEmpty={Messages.NO_EVENT_DATA_SUBTEXT}
          collectionType={"ORGANIZED"}
          limit={6}
          page={eventPage}
          totalPages={organizedEvents?.totalPages}
          urlParamName="events"
        />
      </section>
    </>
  );
};

export default ProfilePage;
