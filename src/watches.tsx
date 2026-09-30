import { useParams } from "react-router-dom";
import data from "./data.json";
import { Link } from "react-router-dom";

export default function Collections() {
  const { brand } = useParams();

  const watches = data.watches.filter(
    (watch) =>
      watch.brand.toLowerCase().replace(/\s+/g, "-") ===
      brand?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#0B2B24] p-10">

      <h1 className="text-4xl text-[#D4AF62] mb-10">
        {brand}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {watches.map((watch) => (
          <div key={watch.id}>
            <Link to={`/watch/${watch.id}`}>
            <img
              src={watch.image}
              alt={watch.name}
              className="w-full h-[400px]
              rounded-4xl bg-gradient-to-t 
              from-[#061A15]/80 
              via-[#0B2B24]/30 to-[#D4AF62]/10"
              />
              </Link>
          </div>
        ))}

      </div>

    </div>
  );
}