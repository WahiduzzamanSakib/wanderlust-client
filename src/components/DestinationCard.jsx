import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";
import { LuMapPinMinus } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
    const {
        _id,
        duration,
        price,
        country,
        destinationName,
        imageUrl,
    } = destination;

    return (
        <div className="border rounded-lg overflow-hidden shadow-md">
            <Image
                src={imageUrl}
                alt={destinationName}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-bold">{destinationName}</h2>

                <p className="text-gray-600 flex gap-2 items-center font-bold">
                    <span className="text-red-600">
                        <LuMapPinMinus size={20} />
                    </span>
                    {country}
                </p>

                <div className="flex justify-between">
                    <p className="text-sm mt-2 flex gap-2 items-center font-bold">
                        <CiCalendarDate size={20} />
                        Duration: {duration}
                    </p>

                    <p className="text-green-600 font-semibold mt-1">
                        ${price}
                    </p>
                </div>

                <Link href={`/destinations/${_id}`}>
                    <button className="cursor-pointer mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Book Now <FiArrowRight size={18} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;