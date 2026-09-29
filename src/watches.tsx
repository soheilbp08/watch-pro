import { Link } from "react-router-dom";

interface Watch {
  id: string | number;
  image: string;
  name: string;
  price: number;
}

function Collections({ watch }: { watch: Watch }) {
  return (
    <Link to={`/watch/${watch.id}`} className="block">

      <div className="relative w-64 overflow-hidden rounded-2xl">

        <img
          src={watch.image}
          alt={watch.name}
          className="w-full"
        />

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#061A15]/80 via-[#0B2B24]/30 to-[#D4AF62]/10"></div>

        <div className="absolute bottom-4 left-4 text-[#F5F1E8]">
          <p>{watch.name}</p>

          <p className="text-[#D4AF62]">
            ${watch.price.toFixed(2)}
          </p>
        </div>

      </div>

    </Link>
  );
}

export default Collections;
