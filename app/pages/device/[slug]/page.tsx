'use client'

import { CardGame } from "@/app/components";
import { GameCard } from "@/app/types";
import Service from "@/service";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Device({ params }: { params: { slug: number } }) {

    const [games, setGames] = useState<GameCard[]>([])
    const [pages, setPages] = useState(1);

    useEffect(() => {
        Service.callSpecificlPlatform(params.slug, pages)
            .then((res) => {
                setGames(res.data.results);
                console.log(res.data.results);

            })
            .catch((err) => {
                // console.error(err);
                setPages(1)
            })
    }, [pages])

    //Controllare quante pagine ci sono sul api, per ogni categoria
    const nextPage = () => {
            setPages(pages + 1)
    }

    const prevPage = () => {
        if (pages === 1) {
            setPages(1)
        } else {
            setPages(pages - 1)
        }
    }

    const test = () => {
        setPages(500)
    }


    return (
        <div className="max-h-full overflow-y-auto overflow-x-hidden pb-2">
            <div className='container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {games.map((game, index) => (
                    <div className='h-[320px] py-5' key={index}>
                        <CardGame id={game.id} name={game.name} metacritic={game.metacritic} background_image={game.background_image} genres={game.genres} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <div className="join">
                    <button onClick={prevPage} className="join-item btn">«</button>
                    <button className="join-item btn">Page {pages}</button>
                    <button onClick={nextPage} className="join-item btn">»</button>
                    
                </div>
            </div>
        </div>
    )
}
