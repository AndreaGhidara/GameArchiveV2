'use client'

import { CardGame, Carousel } from './components'
import { JSX, ReactNode, useEffect, useState } from 'react'
import Service from '@/service'
import { GameCard } from './types'
import Link from 'next/link'

export default function Home() {
  const [newRelase, setNewRelase] = useState([])
  const [gameRelase, setGameRelase] = useState([])

  useEffect(() => {
    Service.callNewGamesRelase()
      .then((res) => {
        setNewRelase(res.data.results)
        
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])

  useEffect(() => {

    const games: any = newRelase.map((game: GameCard, index) => (
      <>
        <Link key={index} className='absolute w-full h-full' href={`/pages/game/${game.id}`}>
          <img src={game.background_image} className='w-full h-full' alt={`${game.name}`} />
          <h1 className='absolute inset-x-0 bottom-0 bgGlass text-green-400 font-bold text-lg'>{game.name}</h1>
        </Link>
      </>
    ))
    setGameRelase(games)

  }, [newRelase])

  const [topMetacriticGame, setTopMetacriticGame] = useState<GameCard[]>([])

  useEffect(() => {
    Service.topMetacriticGame()
      .then((res) => {
        setTopMetacriticGame(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className='w-full mx-auto text-center px-3'>
      <h1 className='title'>New Relase</h1>
      <div className='container mx-auto flex justify-center overflow-hidden'>
        <Carousel items={gameRelase} />
      </div>
      <h1 className='title'>Top Score</h1>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
        {topMetacriticGame.map((game: any, index: number) => (
          <CardGame key={index} name={game.name} id={game.id} background_image={game.background_image} metacritic={game.metacritic} genres={game.genres} />
        ))}
      </div>
    </div>
  )
}
