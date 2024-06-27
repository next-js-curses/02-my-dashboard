'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritesGrid = () => {
  const pokemonsStore = useAppSelector(state => Object.values(state.pokemons.favorites))

  return (
    <>
      {
        pokemonsStore.length
          ? (<PokemonGrid pokemons={ pokemonsStore } />)
          : (<NoFavorites />)
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}
