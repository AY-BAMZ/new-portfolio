import { cn } from '@/lib'
import { getTheme } from '@/lib/localStorage'
import { HomeHashtag } from 'iconsax-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
    const theme = getTheme()
    const [active, setActive] = useState(links[0])

    const [color, setColor] = useState("red")

    useEffect(() => {
      if(theme){
        setColor(theme)
      } else {
        setColor("red")
      }
    }, [theme])
    
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
            {links.map((item: any, index: any)=>(<span key={index} className={cn(`flex w-full aspect-[6/3] items-center justify-center cursor-pointer`, {"hover:text-primary-blue": color === "blue"})}>
<item.Icon size={48} variant="Bold" className={cn({"hover:text-primary-blue": color === "blue", "hover:text-primary-red": color === "red", })}/>
            </span>))}
        </span>
    </span>
  )
}

export default SideBar