'use client'


import { Games } from '@/app/types';
import Service from '@/service';
import { useEffect, useState } from 'react';
import { FaSteam,FaPlaystation,FaXbox } from "react-icons/fa";
import { SiPlaystation3,SiPlaystation4,SiPlaystation5,SiNintendo,SiGogdotcom,SiEpicgames } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";

export default function Game({ params }: { params: { slug: number } }) {

    const [game, setGame] = useState<Games>()

    useEffect(() => {
        Service.callGameinfo(params.slug)
            .then((res) => {
                console.log(res.data);
                setGame(res.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    useEffect(() => {
        console.log(game?.developers);
        console.log(game?.developers?.map((item, index) => (
            item.name
        )));
    }, [game])

    const useIconPlatform = (name: string | undefined) => {
        if (name) {
            switch (name) {
                case "PlayStation 3":
                    return < SiPlaystation3 />

                case "PlayStation 4":
                    return <SiPlaystation4 />;
                case "PlayStation 5":
                    return <SiPlaystation5 />;
                case "Xbox 360":
                    return (
                        <div className='flex items-center' >
                            <FaXbox />
                            <span className=' text-base ps-1'>360</span>
                        </div>
                    );
                case "Xbox One":
                    return (
                        <div className='flex items-center' >
                            <FaXbox />
                            <span className=' text-base ps-1'>One</span>
                        </div>
                    );
                case "Xbox Series S/X":
                    return (
                        <div className='flex items-center' >
                            <FaXbox />
                            <span className=' text-base ps-1'>S/X</span>
                        </div>
                    );
                case "PC":
                    return <FaComputer />;
                case "Epic Games":
                    return <SiEpicgames />;
                default:
                    return <div className=' text-base'>
                        {name}
                    </div>;
            }
        } else {
            return <div>
                <p>Nessuna</p>
            </div>
        }
    }

    const usePlatformIcon = (name: string | undefined) => {
        if (name) {
            switch (name) {
                case "Xbox Store":
                    return <FaXbox />
                case "Steam":
                    return <FaSteam />
                case "GOG":
                    return <SiGogdotcom />
                case "Nintendo Store":
                    return <div className='text-3xl flex items-center'>
                        <SiNintendo />
                    </div>
                case "PlayStation Store":
                    return <FaPlaystation />
                case "Xbox 360 Store":
                    return <div className='flex items-center'>
                        <FaXbox /> <p className=' text-base'> 360Store</p>
                    </div>
                default:
                    return <div className=' text-base'>
                        {name}
                    </div>;
            }
        } else {
            return <div>
                <p>Nessuna</p>
            </div>
        }
    }

    return (
        <div className='p-2'>
            <div className="hero relative h-[400px]" style={{ backgroundImage: `url(${game?.background_image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{game?.name}</h1>
                    </div>
                </div>
                <p className='absolute bottom-0 right-0 p-2 m-2 px-3 py-2 rounded-xl bg-[#07bc0c] text-white'>{game?.metacritic? game.metacritic : "N/"}</p>
            </div>
            {/* Developer */}
            <div className='flex justify-between py-3'>

                <div className='flex flex-col justify-start items-start'>
                    <h6 className='text-xl pb-2 font-bold'>Developer</h6>
                    {game?.developers?.map((item: any, index: number) => (
                        <div key={index}>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className='flex'>
                    <p className='font-bold'>Relase : </p>
                    <span className='ps-2'>{game?.released}</span>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h6 className='text-xl pb-2 font-bold'>Description</h6>
                <p>{game?.description_raw}</p>
            </div>

            <div className='py-3 '>
                <h6 className='text-xl font-bold'>Tags</h6>
                <div className='flex flex-wrap sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                    {game?.tags?.map((item, index) => (
                        <div className='my-2 py-2' key={index}>
                            <span className='border border-info p-2 rounded-3xl'>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="divider">
                <h1 className='text-xl font-bold'>Store</h1>
            </div>
            <div className='flex flex-col justify-center items-center md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {game?.stores?.map((item, index) => (
                    <div className='text-4xl py-2 flex items-center' key={index}>
                        {usePlatformIcon(item?.store?.name)}
                    </div>
                ))}
            </div>
            <div className="divider">
                <h1 className='text-xl font-bold'>Generes</h1>
            </div>
            <div className='flex flex-wrap'>
                {game?.genres?.map((item, index) => (
                    <div key={index} className="badge badge-primary badge-outline me-3">
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="divider">
                <h1 className='text-xl font-bold'>Platforms</h1>
            </div>
            <div className='grid grid-cols-3 '>
                {game?.platforms?.map((item, index) => (
                    <div className='text-4xl flex justify-center items-center py-1' key={index}>
                        {useIconPlatform(item?.platform?.name)}
                    </div>
                ))}
            </div>
            <div className="divider">
                <h1 className='text-xl font-bold'>Add to favorite</h1>
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-primary'>
                    Add to favorite
                </button>
            </div>
        </div>
    )
}

{/* <p>Metacritic</p>
<p>website</p>
<p>rating</p>
<p>Generes</p>
<p>Developer</p>
<p>Description</p> */}