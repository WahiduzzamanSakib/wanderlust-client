import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination", {
    cache: "no-store",
  });

  const destinations = await res.json();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        All Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinations?.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;