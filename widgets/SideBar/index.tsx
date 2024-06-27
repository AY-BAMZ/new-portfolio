import { HomeHashtag } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

function SideBar() {
    const links = [
        {
            link: "/",
            Icon: HomeHashtag,
            text: "Home"
        },
        {
            link: "/",
            Icon: HomeHashtag,
            text: "Home"
        },
        {
            link: "/",
            Icon: HomeHashtag,
            text: "Home"
        },
        {
            link: "/",
            Icon: HomeHashtag,
            text: "Home"
        },
        {
            link: "/",
            Icon: HomeHashtag,
            text: "Home"
        },
    ]
  return (
    <span className='flex flex-col h-[100vh] w-[160px] bg-[#00000025]'>
        <span className='w-full flex items-center justify-center aspect-square border-b-[1px] border-b-black-500'>
            <Image 
              src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673583454/my%20portfolio/logo_wzrddg.png"
              alt=""
              width={70}
              height={70}/>
        </span>
        <span>
            {links.map((item: any, index: any)=>(<span>
<item.Icon size={52} variant="Bold" />
            </span>))}
        </span>
    </span>
  )
}

export default SideBar