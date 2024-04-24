import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'

function layout({children}) {
  return (
    <div className='flex h-screen gap-10'>
        <SidebarComponent/>
        <div className='w-full'>
            <NavbarComponent/>
            <div className='p-3'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default layout