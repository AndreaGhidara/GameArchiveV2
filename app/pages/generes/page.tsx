'use client'

import { CardGeneral } from "@/app/components";
import { Categories } from "@/app/types";
import Service from "@/service";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Generes() {
    const [generes, setGeneres] = useState<Categories[]>([])

    useEffect(() => {
        Service.callCategories()
            .then((res) => {
                setGeneres(res.data.results)
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])
    return (
        <section className="pt-5 px-3">
            <div className="text-center pb-5">
                <h1 className="title">All Devices</h1>
            </div>
            {generes && generes.length > 0 && (
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {generes.map((type, index) => (
                        <Link key={index}
                            href={{
                                pathname: `/pages/genre/${type.id}`,
                            }}>
                            <div key={index}>
                                <CardGeneral id={type.id} image_background={type.image_background} name={type.name} games_count={type.games_count}/>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {generes.length === 0 && (
                <div className="w-full h-full flex justify-center items-center">
                    <div>
                        Caricamento
                    </div>
                </div>
            )}

        </section>
    )
}
