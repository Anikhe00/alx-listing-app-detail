// constants/index.ts
import { PropertyProps } from "@/interfaces";

// Example: API base URL
export const API_BASE_URL = "https://api.example.com";

// Example: UI text
export const APP_NAME = "ALX Listing App";
export const APP_TAGLINE = "Find your perfect stay, inspired by Airbnb.";

// Example: Navigation links (top nav bar)
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Example: Footer links
export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "beach-villa",
    name: "Beachfront Villa",
    rating: 4.8,
    address: { city: "Lagos", country: "Nigeria" },
    image: "/images/villa-main.jpg",
    images: ["/images/villa1.jpg", "/images/villa2.jpg", "/images/villa3.jpg"],
    description:
      "Experience a serene stay at our beachfront villa with modern amenities and breathtaking ocean views.",
    category: [
      "WiFi",
      "Swimming Pool",
      "Kitchen",
      "Air Conditioning",
      "Parking",
    ],
    pricePerNight: 200,
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        avatar: "/images/avatar1.jpg",
        comment:
          "Amazing stay! The view was spectacular and the staff was friendly.",
      },
      {
        name: "David Kim",
        rating: 4,
        avatar: "/images/avatar2.jpg",
        comment: "Great place to relax. The rooms were clean and comfortable.",
      },
    ],
  },
];
