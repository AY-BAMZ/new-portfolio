import Title from "@/components/Title";
import { cn } from "@/lib";
import { getTheme } from "@/lib/localStorage";
import { Progress, RingProgress, ScrollArea, Text } from "@mantine/core";
import {
  BinanceCoin,
  Book1,
  Cpu,
  CpuCharge,
  Game,
  Mobile,
  MobileProgramming,
  Monitor,
  MonitorMobbile,
  Music,
  PresentionChart,
  VideoHorizontal,
  VideoPlay,
} from "iconsax-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function PortfolioPage() {
  const theme = getTheme();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme) {
      setColor(theme);
    } else {
      setColor("orange");
    }
  }, [theme]);

  const borderColors = {
    "border-primary-blue": color === "blue",
    "border-primary-red": color === "red",
    "border-primary-green": color === "green",
    "border-primary-yellow": color === "yellow",
    "border-primary-cray": color === "cray",
    "border-primary-purple": color === "purple",
    "border-primary-orange": color === "orange",
  };

  const textColors = {
    "text-primary-blue": color === "blue",
    "text-primary-red": color === "red",
    "text-primary-green": color === "green",
    "text-primary-yellow": color === "yellow",
    "text-primary-cray": color === "cray",
    "text-primary-purple": color === "purple",
    "text-primary-orange": color === "orange",
  };
  const projects = [
    {
      name: "NinthGrid",
      url: "https://beta.ninthgrid.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231254/Frame_793_zz8k7r.png",
    },
    {
      name: "Rexa Android",
      url: "https://play.google.com/store/apps/details?id=app.adiba.capitalfield.miya&pcampaignid=web_share",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715903555/unnamed_3_iqo720.webp",
    },
    {
      name: "Rexa iOS",
      url: "https://apps.apple.com/ng/app/rexa-finance/id6446645311",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715903555/unnamed_3_iqo720.webp",
    },
    {
      name: "Learngual",
      url: "https://learngual.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1690120309/Frame_790_esbomk.png",
    },
    {
      name: "Pays",
      url: "https://www.usepays.co/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1682722616/Frame_789_zxf7sk.png",
    },
    {
      name: "GetStac Android",
      url: "https://play.google.com/store/apps/details?id=com.cargle.getstacbeta&pcampaignid=web_share",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715904301/Frame_795_slntfn.png",
    },
    {
      name: "GetStac iOS",
      url: "https://apps.apple.com/ng/app/getstac/id6477868812",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715904301/Frame_795_slntfn.png",
    },
    {
      name: "Adiba",
      url: "http://adiba.app/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231253/Frame_791_kbdhnt.png",
    },
    {
      name: "Cashaam",
      url: "https://cashaam.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1675671257/my%20portfolio/Frame_788_kq8ywm.png",
    },
    {
      name: "Spikk Deliveries",
      url: "https://spikk-deliveries.vercel.app/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231752/Frame_794_c1caqx.png",
    },
    {
      name: "Aljys",
      url: "https://www.aljys.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1682721662/Frame_789_vhfo5s.png",
    },
    {
      name: "Zuri Chat",
      url: "https://www.zuri.chat/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1673579632/my%20portfolio/Frame_787_pgqy61.png",
    },
    {
      name: "Shiga",
      url: "https://shiga.finance/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231253/Frame_792_pdr1by.png",
    },
    {
      name: "Re Scope",
      url: "https://www.rescope.earth/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1673576774/my%20portfolio/Frame_780_xusmpl.png",
    },
  ];
  return (
    <ScrollArea className="h-screen w-[100%]">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"Projects"} />
        <span className="w-full bg-[#00000090] lg:px-[120px] p-8 py-16 gap-8 rounded-xl flex flex-col">
          {projects.map((item, index) => (
            <span
              key={index}
              className={cn("flex lg:flex-row flex-col gap-6", {
                "lg:flex-row-reverse": index % 2 === 1,
              })}
            >
              <Image
                src={item.image}
                alt=""
                width={1000}
                height={1000}
                className="lg:w-[48%] w-full aspect-[9/6] object-cover rounded-md"
              />
              <span className="lg:w-[48%] w-full">
                <h1 className="lg:text-[40px] text-[40px]">{item.name}</h1>
              </span>
            </span>
          ))}
        </span>
      </div>
    </ScrollArea>
  );
}

export default PortfolioPage;
