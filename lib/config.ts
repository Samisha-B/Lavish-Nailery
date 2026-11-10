// All editable content lives here. Items marked TODO need real info from the client.
export const config = {
  name: "Lavish Nailery",
  tagline: "The go-to luxury nail studio in East Pune",
  whatsapp: "919209770992",
  phoneDisplay: "+91 92097 70992",
  instagram: "lavishnailery_kln",
  branches: [
    {
      id: "kalyani-nagar",
      name: "Kalyani Nagar",
      address: "Shop no. 07, Sunshine Court, Kalyani Nagar, Pune, Maharashtra 411006",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lavish+Nailery+Kalyani+Nagar+Pune",
    },
    {
      id: "fc-road",
      name: "FC Road",
      address: "FC Road, Pune (TODO: full address)",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lavish+Nailery+FC+Road+Pune",
    },
  ],
  offerLabel: "Diwali Glow: festive limited-time pricing", // TODO: remove after the offer ends
  services: [
    { name: "Gel Polish", price: 599, mrp: 999 },
    { name: "Gel Overlays", price: 1199, mrp: 1899 },
    { name: "Refilling", price: 1199, mrp: 1799 },
    { name: "Gel Extensions", price: 1499, mrp: 2499 },
    { name: "Acrylic Extensions", price: 1799, mrp: 2799 },
    { name: "Removal", price: 399, mrp: 699 },
    { name: "Temporary Extensions", price: 999, mrp: 1799 },
  ],
  timeSlots: ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"],
  courses: ["Nail Extensions Basics", "Advanced Nail Art", "Complete Nail Technician"], // TODO: real course names
  // Add photos to /public/gallery and list them here, e.g. { src: "/gallery/1.jpg", alt: "Pearl & gold nails" }
  gallery: [
    { src: "/gallery/1.jpg", alt: "Pearl and gold stud almond nails" },
    { src: "/gallery/2.jpg", alt: "Soft chrome milky almond nails" },
    { src: "/gallery/3.jpg", alt: "Nail art" },
    { src: "/gallery/4.jpg", alt: "Nail art" },
  ],
};

export const waLink = (text: string) =>
  `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;
