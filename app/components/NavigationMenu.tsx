import Link from "next/link"
import { IoFolderOpenOutline, IoGameControllerOutline } from "react-icons/io5"
import { RiHome6Line, RiSave3Fill } from "react-icons/ri"

function NavigationMenu() {
    return (
        <>
            <Link href={"/"}>
                <li className="flex hover:text-green-400 font-bold text-lg">
                    <RiHome6Line />
                    <span className="ps-2">Home</span>
                </li>
            </Link>
            {/* <Link href={"/pages/savedGames"}>
                <li className="flex hover:text-green-400 font-bold text-lg">
                    <RiSave3Fill />
                    <span className="ps-2">Saved</span>
                </li>
            </Link> */}
            <Link href={"/pages/generes"}>
                <li className="flex hover:text-green-400 font-bold text-lg">
                    <IoFolderOpenOutline />
                    <span className="ps-2">Generi</span>
                </li>
            </Link>
            <Link href={"/pages/devices"}>
                <li className="flex hover:text-green-400 font-bold text-lg">
                    <IoGameControllerOutline />
                    <span className="ps-2">Periferica</span>
                </li>
            </Link>
        </>
    )
}

export default NavigationMenu