'use client'

import { CardGeneral } from "@/app/components";
import { Device } from "@/app/types";
import Service from "@/service";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Devices() {
    const [devices, setDecive] = useState<Device[]>([])

    useEffect(() => {
        Service.callPlatform()
            .then((res) => {
                setDecive(res.data.results)
                console.log(res.data.results);

            })
            .catch((err) => {
                console.error(err);
            })
    }, [])
    return (
        <section className="pt-5 px-3">
            <div className="text-center pb-5">
                <h1 className="title">All Platforms</h1>
            </div>
            {devices && devices.length > 0 && (
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {devices.map((device, index) => (
                        <Link key={index}
                            href={{
                                pathname: `/pages/device/${device.id}`,
                            }}>
                            <div key={index}>
                                <CardGeneral id={device.id} name={device.name} image_background={device.image_background} games_count={device.games_count} />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {devices.length === 0 && (
                <div className="w-full h-full flex justify-center items-center">
                    <div>
                        Caricamento
                    </div>
                </div>
            )}
        </section>
    )
}
