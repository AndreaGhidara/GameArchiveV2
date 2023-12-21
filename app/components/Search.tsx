'use client'

import Service from "@/service";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react"
import { Games } from "../types";
import { IoSearchSharp } from "react-icons/io5";


function Search() {

    const [searchQuery, setSearchQuery] = useState("")

    const [games, setGames] = useState<Games[]>([])

    function handleChange(event: any) {
        setSearchQuery(event.target.value);
    }

    const SerachGame = () => {

        Service.callSearchQuery(searchQuery)
            .then((res) => {
                console.log(res);
                setGames(res.data.results)
            })
            .catch((err) => {
                console.log(err);

            })

    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Impedisce il comportamento predefinito del form (ricarica la pagina)
        SerachGame();
    };

    const openModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        modal.showModal();
    }

    const closeModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        modal.close();
        setSearchQuery("");
        setGames([])
    }

    return (
        <div>
            <button className="btn btn-ghost btn-circle relative sm:right-3 z-50" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <dialog id="my_modal_3" className="modal z-10">
                <div className="modal-box">
                    <form method="dialog">
                        <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg py-3">Search Game</h3>
                    <div className="py-3">
                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <input type="text" placeholder="Type here" onSubmit={SerachGame} onChange={handleChange} value={searchQuery} className="input input-bordered w-full" />
                                <button className="absolute text-lg p-2 right-0" onClick={SerachGame}>
                                    <IoSearchSharp />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className="pb-2 font-bold">Risultati</p>
                        {games ? (
                            <div className='flex flex-col gap-y-3'>
                                {games.map((game, index) => (
                                    <div key={index} className='flex items-center'>
                                        <Link onClick={closeModal} className='flex items-center' href={`/pages/game/${game.id}`}>
                                            <div className='w-[40px] h-[40px] relative rounded-md bg-slate-900'>
                                                <Image
                                                    src={game.background_image}
                                                    alt={game.name}
                                                    fill={true}
                                                    sizes='100%'
                                                    className='object-cover rounded-md'
                                                />
                                            </div>
                                            <p className='ps-3'>{game.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <p>Cerca</p>
                            </div>
                        )}
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Search