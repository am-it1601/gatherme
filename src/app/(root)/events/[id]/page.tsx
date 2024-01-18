import { getEventById } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import React from "react";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = getEventById(id);
  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      
    </section>
  )
};

export default EventDetails;
