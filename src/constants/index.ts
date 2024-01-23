export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};

export const Messages = {
  NO_EVENT_DATA:
    "Our event search came up empty, but we're not giving up. Neither should you!",
  NO_EVENT_DATA_SUBTEXT:
    "Don't worry,We're on a mission to bring you the best ones!",
  DELETE_CONFIRMATION_TITLE: "Deleting your event?",
  DELETE_CONFIRMATION_DESCRIPTION:
    "We can't undo the magic once it's gone. Think twice!",
  RELATED_EVENT_CATEGORY_TITLE: "From the Same Genre...",
  RELATED_EVENT_CATEGORY_TEXT: "Discover Similar Adventures Awaiting You!!",
  EVENT_CLOSED_TEXT:
    "Oh dear, this event is as gone as yesterday's news. Fear not; we've got a world of excitement waiting for you!",
  GET_TICKET_BUTTON_TEXT: "Book your Seat",
  CONFIRM_YOUR_SEAT: "Yes, I Want My Free Seat!",
  PURCHASE_YOUR_SLOT: "Reserve My Spot",
};

export const APP_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 10,
};
