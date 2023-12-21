import { Device } from "@/app/types"
import Image from "next/image"

function CardGeneral({id,name,image_background,games_count}:Device) {
    return (
            <div className="w-full rounded">
                <div className="relative h-[250px]">
                    <Image
                        src={image_background}
                        alt="one piece"
                        fill={true}
                        sizes="100%"
                        className="object-cover rounded"
                    />
                    <h3 className="absolute m-2 border p-2 rounded bgGlass bgGlass text-green-400 font-bold text-lg">{name}</h3> 
                </div>
                
            </div>
    )
}

export default CardGeneral