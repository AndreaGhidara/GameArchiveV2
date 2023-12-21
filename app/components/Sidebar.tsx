import Link from "next/link";
import { IoGameControllerOutline, IoFolderOpenOutline } from "react-icons/io5";
import { RiSave3Fill, RiHome6Line } from "react-icons/ri";
import { ChangeTheme, NavigationMenu, Search } from ".";

function Sidebar() {
    return (
        <div className="p-1 flex flex-col justify-between items-center h-full">
            <div>
                <div>
                    <div className="avatar">
                        <div className="w-24 mask mask-hexagon">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div className='py-3'>
                    <ul className="flex flex-col gap-y-1">
                        <NavigationMenu />
                    </ul>
                </div>
            </div>
            <div>
                <ChangeTheme />
            </div>
        </div>
    )
}

export default Sidebar