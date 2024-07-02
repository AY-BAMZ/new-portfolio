import { useThemeContext } from "@/contetxt/ThemeContext";
import { cn } from "@/lib";
import {
  Book1,
  BrifecaseTick,
  Firstline,
  Grid3,
  HomeHashtag,
  UserOctagon,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SideBar() {
  const router = useRouter();
  const pathname = router.pathname;
  const links = [
    {
      link: "/",
      Icon: HomeHashtag,
      text: "Home",
    },
    {
      link: "/about",
      Icon: UserOctagon,
      text: "About",
    },
    {
      link: "/skills",
      Icon: Book1,
      text: "Skills",
    },
    {
      link: "/experience",
      Icon: BrifecaseTick,
      text: "Experience",
    },
    {
      link: "/portfolio",
      Icon: Grid3,
      text: "Portfolio",
    },
    {
      link: "/contacts",
      Icon: Firstline,
      text: "Contacts",
    },
  ];

  const { color }: any = useThemeContext();
  const [active, setActive] = useState(links[0]?.text);

  useEffect(() => {
    if (pathname) {
      setActive(pathname);
    }
  }, []);

  const handleSelect = (value: any) => {
    setActive(value?.link);
    router.push(`${value?.link}`);
  };
  return (
    <span className="flex flex-col h-[100vh] w-[150px] bg-[#00000035]">
      <span className="w-full flex items-center justify-center aspect-square border-b-[1px] border-b-black-500">
        <Link href={`/`}>
          <Image
            src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673583454/my%20portfolio/logo_wzrddg.png"
            alt=""
            width={64}
            height={64}
          />
        </Link>
      </span>
      <span className="py-7">
        {links.map((item: any, index: any) => (
          <span
            key={index}
            className={cn(
              `flex flex-col gap-1 w-full aspect-[9/5] items-center justify-center cursor-pointer`,
              {
                "hover:text-primary-blue": color === "blue",
                "hover:text-primary-red": color === "red",
                "hover:text-primary-green": color === "green",
                "hover:text-primary-yellow": color === "yellow",
                "hover:text-primary-cray": color === "cray",
                "hover:text-primary-purple": color === "purple",
                "hover:text-primary-orange": color === "orange",
              },
              {
                "text-primary-blue": color === "blue" && active === item?.link,
                "text-primary-red": color === "red" && active === item?.link,
                "text-primary-green":
                  color === "green" && active === item?.link,
                "text-primary-yellow":
                  color === "yellow" && active === item?.link,
                "text-primary-cray": color === "cray" && active === item?.link,
                "text-primary-purple":
                  color === "purple" && active === item?.link,
                "text-primary-orange":
                  color === "orange" && active === item?.link,
              }
            )}
            onClick={() => handleSelect(item)}
          >
            <item.Icon
              size={40}
              variant="Bold"
              className={cn(
                {
                  "hover:text-primary-blue": color === "blue",
                  "hover:text-primary-red": color === "red",
                  "hover:text-primary-green": color === "green",
                  "hover:text-primary-yellow": color === "yellow",
                  "hover:text-primary-cray": color === "cray",
                  "hover:text-primary-purple": color === "purple",
                  "hover:text-primary-orange": color === "orange",
                },
                {
                  "text-primary-blue":
                    color === "blue" && active === item?.text,
                  "text-primary-red": color === "red" && active === item?.text,
                  "text-primary-green":
                    color === "green" && active === item?.text,
                  "text-primary-yellow":
                    color === "yellow" && active === item?.text,
                  "text-primary-cray":
                    color === "cray" && active === item?.text,
                  "text-primary-purple":
                    color === "purple" && active === item?.text,
                  "text-primary-orange":
                    color === "orange" && active === item?.text,
                }
              )}
            />
            <p className="text-[10px] font-light">{item?.text}</p>
          </span>
        ))}
      </span>
    </span>
  );
}

export default SideBar;
