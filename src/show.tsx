import { useParams } from "react-router-dom";
import data from "./data.json";

export default function Show() {
  const { id } = useParams<{ id: string }>();

  const watch = data.watches.find(
    (item) => String(item.id) === (id ?? "")
  );

  if (!watch) {
    return <div>Watch not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0B2B24] text-[#F5F1E8] p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* عکس */}
        <div>
          <img
            src={watch.image}
            alt={watch.name}
            className="w-full rounded-xl"
          />
        </div>

        {/* مشخصات */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-[#D4AF62] mb-6">
            {watch.name}
          </h1>

          <p className="text-2xl mb-6">
            ${watch.price}
          </p>

          <p className="text-gray-300 leading-7">
            {watch.description}
          </p>
        </div>

      </div>
    </div>
  );
}