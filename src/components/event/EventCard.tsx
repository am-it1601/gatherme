import { IEvents } from "@/lib/database/models/events.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { DeleteEvent } from "./DeleteEvent";

type EventCardProps = {
  event: IEvents;
  isOrderLinked?: boolean;
  hidePrice?: boolean;
};
const EventCard = ({
  event,
  isOrderLinked = false,
  hidePrice = false,
}: EventCardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId?.userId;
  const isCreator = userId === event.organizer._id.toString();
  return (
    <div
      className="group relative flex min-h-[380px] 
                    w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-2 md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{
          backgroundImage: `url(${event.imageUrl})`,
        }}
        className="flex-grow w-full bg-center bg-cover text-grey-500 flex-center bg-grey-50"
      />
      {/* IS EVENT CREATE */}
      {isCreator && !hidePrice && (
        <div className="absolute top-2 right-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all hover:scale-110 hover:shadow-md ">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              width={20}
              height={20}
              alt="edit"
            />
          </Link>
          <DeleteEvent eventId={event._id} />
        </div>
      )}
      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="px-4 py-1 bg-green-100 rounded-full p-semibold-14 w-min text-green-60">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            {event.category && (
              <p className="px-4 py-1 rounded-full p-semibold-14 w-min bg-grey-500/10 text-grey-500 line-clamp-1">
                {event.category?.name}
              </p>
            )}
          </div>
        )}
        <p className="p-medium-16 p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        <Link href={`/events/${event._id}`}>
          <p className="flex-1 text-primary-500 p-medium-16 md:p-medium-20 line-clamp-2">
            {event.title}
          </p>
        </Link>
        <div className="w-full flex-between">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {isOrderLinked && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
