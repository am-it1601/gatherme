// import CheckoutButton from "@/components/shared/CheckoutButton";
// import Collection from "@/components/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.action";
import { IEvents } from "@/lib/database/models/events.model";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = (await getEventById(id)) as IEvents;

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <section className="flex justify-center bg-contain bg-primary-50 bg-dotted-pattern">
      <div className="grid grid-col-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event.imageUrl}
          alt="Event Image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex flex-col w-full gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold">{event.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="px-5 py-2 text-blue-700 rounded-full p-bold-20 bg-blue-500/10">
                  {event.isFree ? "FREE" : `$${event.price}`}
                </p>
                <p className="px-4 py-2.5 rounded-full p-medium-16 bg-grey-500/10 text-grey-500'">
                  {event.category.name}
                </p>
              </div>

              <p className="mt-2 ml-2 p-medium-18 sm:mt-0">
                By{" "}
                <span className="text-primary-500">
                  {event.organizer.firstName} {event.organizer.lastName}
                </span>
              </p>
            </div>
          </div>

          {/* {Checkout Button} */}

          <div className="flex flex-col gap-5">
            <div className="flex gap-2 md:gap-3">
              <Image
                src={"/assets/icons/calendar.svg"}
                width={28}
                alt="calendar"
                height={28}
              />
              <div className="flex flex-wrap items-center p-medium-16 lg:p-regular-20">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly} -{" "}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>
                <p className="ml-1">
                  {formatDateTime(event.endDateTime).dateOnly} -{" "}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-regular-20">
              <Image
                src={"/assets/icons/location.svg"}
                width={32}
                height={32}
                alt="location"
              />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-primary-500/90">
              Get Ready for an Event Extravaganza: All the Inside Info You
              Need!:
            </p>
            <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
            <p className="underline truncate p-medium-16 lg:p-regular-18 text-primary-500">
              {event.url}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
