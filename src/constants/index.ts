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
};

export const APP_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 10,
};
