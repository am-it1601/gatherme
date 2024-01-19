import { Button } from "@/components/ui/button";
import Collection from "@/components/event/Collection";
import Image from "next/image";
import Link from "next/link";
import { APP_CONSTANTS, Messages } from "@/constants";
import { getAllEvents } from "@/lib/actions/event.action";

export default async function Home() {
  const allEvents = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: APP_CONSTANTS.DEFAULT_PAGE_SIZE,
  });
  return (
    <>
      <section className="py-5 bg-contain bg-primary-50 bg-dotted-pattern md:py-10">
        <div className="grid grid-cols-1 gap-5 wrapper md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Your Journey, Your Events: From Local to Global Adventures!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book, host or join from 3168+ events happening in your locality.
              Meet, greet and Grow your network with GatherMe !
            </p>
            <Button size="lg" asChild className="w-full button sm:w-fit">
              <Link href="#events"> Explore Now.</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero_image"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="flex flex-col gap-8 my-8 wrapper md:gap-12">
        <h2 className="h2-bold">
          Thousand Voices, One Choice <br /> Make Us Yours for Events
        </h2>
        <div className="flex flex-col w-full gap-5 md:flex-row">
          Search Category Filter{" "}
        </div>
        <Collection
          data={allEvents.data}
          titleIfEmpty={Messages.NO_EVENT_DATA}
          messageIfEmpty={Messages.NO_EVENT_DATA_SUBTEXT}
          collectionType={"ALL"}
          limit={10}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
}
