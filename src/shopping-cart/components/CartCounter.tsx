'use client'
import { useState } from "react"

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [ count, setCount ] = useState(value)
  const increment = () => setCount(count+1)
  const decrement = () => setCount(count > 0 ? count-1 : 0)
  return (
    <>
      <span className="text-9xl">{ count }</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={ increment }
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={ decrement }
        >
          -1
        </button>
      </div>
    </>
  )
}
