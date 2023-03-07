import React from 'react'

type Props = {
  name: string
  desc: string
  img: string
}

const Class = ({ img, name, desc }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-red-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
    <div className={overlayStyles}>
      <p className="text-2xl">{name}</p>
      <p className="mt-5">{desc}</p>
    </div>
    <img alt={`${img}`} src={img} />
  </li>
  )
}

export default Class;
