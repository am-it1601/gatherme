import { IEvents } from "@/lib/database/models/events.model";
import React from "react";
import { COLLECTION_TYPE } from "@/types";
import EventCard from "./EventCard";

type CollectionProps = {
  data: IEvents[];
  titleIfEmpty: string;
  messageIfEmpty?: string;
  collectionType?: COLLECTION_TYPE;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};
const Collection = ({
  data,
  titleIfEmpty,
  messageIfEmpty,
  collectionType,
  limit,
  page,
  totalPages = 0,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full gap-2 grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "ORGANIZED";
              const hidePrice = collectionType === "USER";

              return (
                <li key={event._id} className="flex justify-center">
                  <EventCard
                    isOrderLinked={hasOrderLink}
                    hidePrice={hidePrice}
                    event={event}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper w-full flex-col gap-3 rounded-[14px] min-h-[200px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">{titleIfEmpty}</h3>
          <p className="p-regular-14">{messageIfEmpty}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
