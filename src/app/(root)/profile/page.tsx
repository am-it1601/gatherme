import Collection from "@/components/event/Collection";
import { Button } from "@/components/ui/button";
import { Messages } from "@/constants";
import { getEventsByUser } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";

import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
  //   const myEvents = await get;
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const organizedEvents = await getEventsByUser({ userId, page: 1 });
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
      {/* <section className="wrapper my-8">
        <Collection
          data={myEvents.data}
          titleIfEmpty={Messages.NO_EVENT_DATA}
          messageIfEmpty={Messages.NO_EVENT_DATA_SUBTEXT}
          collectionType={"USER"}
          limit={3}
          page={1}
          totalPages={2}
          urlParamName="ordersPage"
        />
      </section> */}
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
          collectionType={"USER"}
          limit={6}
          page={1}
          totalPages={2}
          urlParamName="events"
        />
      </section>
    </>
  );
};

export default ProfilePage;
