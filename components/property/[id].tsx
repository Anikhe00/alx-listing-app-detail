import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Section */}
      <div className="lg:col-span-2">
        <PropertyDetail property={property} />
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Right Booking Section */}
      <div className="lg:col-span-1">
        <BookingSection price={property.pricePerNight} />
      </div>
    </div>
  );
}
