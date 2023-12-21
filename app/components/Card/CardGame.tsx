import { GameCard } from "@/app/types";
import Service from "@/service";
import Image from "next/image";
import Link from "next/link";

function CardGame({ id, name, background_image, metacritic, genres }: GameCard) {

    return (
        <div className="w-full rounded">
            <Link href={{
                pathname: `/pages/game/${id}`
            }} >
                <div className="relative h-[250px]">
                    <Image
                        src={background_image}
                        alt="one piece"
                        fill={true}
                        sizes="100%"
                        className="object-cover rounded"
                    />
                    <h3 className="absolute m-2 border p-2 rounded bgGlass text-green-600 font-bold text-lg">{name}</h3>
                    <div className={`absolute bottom-0 right-0 m-2 px-3 py-2 rounded-xl bg-[#07bc0c] ${Number(metacritic) > 40 ? "bg-[#07bc0c]" : "bg-[#b3bd32]"}` }>
                        <p className="text-white">
                            {metacritic ? metacritic : "N/"}
                        </p>
                    </div>

                </div>
            </Link>
            <div className="p-1">
                <ul className="flex flex-wrap gap-2">
                    {genres?.map((item, index) => (
                        <li className="badge badge-outline" key={index}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardGame