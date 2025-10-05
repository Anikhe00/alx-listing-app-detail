// Shared TypeScript interfaces for UI components

// Button props placeholder
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

// Card props placeholder
export interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode; // main content inside the card
  hoverable?: boolean; // whether the card should react to hover
}

// Property listing placeholder
export interface PropertyProps {
  id: string;
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string;
  images?: string[];
  description: string;
  category: string[];
  pricePerNight: number;
  reviews: {
    name: string;
    rating: number;
    avatar: string;
    comment: string;
  }[];
}

export interface Review {
  name: string;
  rating: number;
  avatar: string;
  comment: string;
}
