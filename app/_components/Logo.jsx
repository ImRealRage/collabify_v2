import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex items-center gap-2 align-middle'>
      <Image src={'/logo.png'} alt='logo' width={55} height={55} />
      <h2 className="font-bold text-xl">Collabify</h2>
    </div>
  )
}

export default Logo
