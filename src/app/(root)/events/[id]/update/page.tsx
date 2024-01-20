import EventForm from "@/components/event/EventForm";
import { getEventById } from "@/lib/actions/event.action";
import { getUserById } from "@/lib/actions/user.action";
import { IEvents } from "@/lib/database/models/events.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateEvent = async ({ params: { id } }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims.userId?.userId as string;
  const event = (await getEventById(id)) as IEvents;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Edit Event{" "}
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update" event={event} eventId={id} />
      </div>
    </>
  );
};

export default UpdateEvent;
