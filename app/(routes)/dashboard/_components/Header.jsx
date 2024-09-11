import React from 'react'
import Logo from "@/app/_components/Logo";
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <Logo />

      <UserButton />
    </div>
  )
}

export default Header
