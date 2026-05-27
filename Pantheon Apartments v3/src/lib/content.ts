export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
] as const;

export const STATS = [
  { value: "9.4 / 10", label: "Guest Rating" },
  { value: "22", label: "Verified Reviews" },
  { value: "4", label: "Max Guests" },
  { value: "≤1h", label: "Host Response" },
] as const;

export const AMENITIES = [
  {
    icon: "lucide:waves",
    title: "Beach Access",
    desc: "Step directly onto the sandy shores of Paralia Katerinis. Sunrises over the Aegean from your doorstep.",
  },
  {
    icon: "lucide:chef-hat",
    title: "Full Kitchen",
    desc: "Cook like a local. Fully equipped kitchen with refrigerator, cookware, and all essentials for your stay.",
  },
  {
    icon: "lucide:wifi",
    title: "Free WiFi",
    desc: "High-speed wireless internet throughout the apartment — stay connected or work remotely.",
  },
  {
    icon: "lucide:parking-square",
    title: "Free Parking",
    desc: "Dedicated on-property parking at no extra charge — rare for this part of Paralia.",
  },
  {
    icon: "lucide:briefcase",
    title: "Workspace",
    desc: "Dedicated desk area for those who need to blend work and holiday.",
  },
  {
    icon: "lucide:key-round",
    title: "Entire Apartment",
    desc: "The whole space is yours — 1 bedroom, 2 beds, private bathroom. Up to 4 guests.",
  },
] as const;

/* Real guest reviews — sourced from Booking.com. Translated ones marked as such. */
export const REVIEWS = [
  {
    quote:
      "An apartment with one bedroom and a living room with kitchen. The apartment benefits from a very large balcony, which is obviously a plus. The apartment is located very close to Lidl, in case you prefer to do your shopping at this supermarket.",
    name: "Silviu",
    initial: "S",
    date: "July 2025 · Romania",
    stars: 5,
  },
  {
    quote:
      "The room was very clean and the bed was very comfortable. The best part is that we had a parking space. Communication with the host was very easy and every question we had was answered.",
    name: "Galina",
    initial: "G",
    date: "August 2025 · Bulgaria",
    stars: 5,
  },
  {
    quote:
      "A great apartment within walking distance of the centre, yet in a peaceful, quiet spot. Communication with the host was very easy. Very clean and equipped with everything you need — suitable for longer stays. They've thought of everything. The parking spot is a huge plus, and Lidl is nearby.",
    name: "Nadia",
    initial: "N",
    date: "July 2025 · Bulgaria",
    stars: 5,
    translated: true,
  },
  {
    quote:
      "We had a wonderful stay! The service was prompt and friendly. The location — within the village and very close to the beach — is ideal. The room had everything we needed: good layout, hot water, comfortable beds, lovely lighting. A very pleasant experience that we'll choose again.",
    name: "Filippos",
    initial: "F",
    date: "September 2025 · Greece",
    stars: 5,
    translated: true,
  },
  {
    quote:
      "The location was convenient to shops, restaurants, cafes and the beach.",
    name: "Christy",
    initial: "C",
    date: "November 2025 · United States",
    stars: 5,
  },
  {
    quote:
      "A completely unexpected experience. Very clean, with so many thoughtful details. Highly recommended.",
    name: "Aleksandar",
    initial: "A",
    date: "November 2025 · Serbia",
    stars: 5,
    translated: true,
  },
] as const;

export const RATING_SUMMARY = {
  score: "9.4",
  stars: "★★★★★",
  count: "22 Reviews",
  platform: "Booking.com",
} as const;

export const LOCATION_POINTS = [
  { label: "Beach", detail: "Directly accessible on foot" },
  { label: "Restaurants & Cafés", detail: "Within 2 minutes walk" },
  { label: "Olympic Beach", detail: "3.4 km away" },
  { label: "Katerini City", detail: "15 min by car" },
  { label: "Thessaloniki Airport", detail: "90 km (approx. 1 hr)" },
] as const;

export const FOOTER_LINKS = {
  navigate: [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#amenities", label: "Amenities" },
    { href: "#reviews", label: "Reviews" },
  ],
  stay: [
    { label: "Check-in: 3:00 PM" },
    { label: "Check-out: 11:00 AM" },
    { label: "Up to 4 guests" },
    { label: "Free parking" },
  ],
  nearby: [
    { label: "Paralia Beach" },
    { label: "Olympic Beach" },
    { label: "Ancient Dion" },
    { label: "Mount Olympus" },
  ],
} as const;

export const IMAGES = {
  hero:           { src: "/images/hero-exterior.jpg",  alt: "Pantheon Apartments seafront exterior" },
  livingRoom:     { src: "/images/living-room.jpg",    alt: "Pantheon Apartments living area" },
  bedroom:        { src: "/images/bedroom.jpg",        alt: "Pantheon Apartments bedroom" },
  kitchen:        { src: "/images/kitchen.jpg",        alt: "Fully equipped kitchen at Pantheon Apartments" },
  bathroom:       { src: "/images/bathroom.jpg",       alt: "Private bathroom at Pantheon Apartments" },
  bathroomSuite:  { src: "/images/bathroom-suite.jpg", alt: "Marble-finished bathroom with walk-in shower and washing machine" },
  kitchenDetail:  { src: "/images/kitchen-detail.jpg", alt: "Kitchen countertop with induction cooktop and espresso machine" },
  diningArea:     { src: "/images/dining-area.jpg",    alt: "Dining table and adjacent fully-equipped kitchen" },
} as const;

export const HOST_TAGLINE =
  "Where the Aegean meets the foot of Olympus — your private Greek summer in the heart of Paralia Katerinis.";

export const HOST_ADDRESS = "Paralia Katerinis, Pieria 60100, Greece";

/* Booking targets — used by BookingCta to redirect with prefilled dates/guests. */
export const BOOKING = {
  airbnb: {
    /* Airbnb canonical listing — prefill params: check_in, check_out, adults */
    listingUrl: "https://www.airbnb.com/rooms/1421503954372049985",
    params: { checkIn: "check_in", checkOut: "check_out", guests: "adults" },
  },
  bookingCom: {
    /* Booking.com canonical listing (resolved from short URL booking.com/Share-1vB6XIn).
       Prefill params: checkin, checkout, group_adults, no_rooms */
    listingUrl:
      "https://www.booking.com/hotel/gr/pantheon-apartments-paralia-katerines.html",
    params: { checkIn: "checkin", checkOut: "checkout", guests: "group_adults" },
    extra: { no_rooms: "1" },
  },
  phone: {
    display: "+30 694 4187226",
    tel: "+306944187226",
    wa: "306944187226",
  },
} as const;
