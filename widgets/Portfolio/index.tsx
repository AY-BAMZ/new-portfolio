import Title from "@/components/Title";
import { useThemeContext } from "@/contetxt/ThemeContext";
import { cn } from "@/lib";
import { ScrollArea } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PortfolioPage() {
  const { color }: any = useThemeContext();

  const backgroundColors = {
    "bg-primary-blue": color === "blue",
    "bg-primary-red": color === "red",
    "bg-primary-green": color === "green",
    "bg-primary-yellow": color === "yellow",
    "bg-primary-cray": color === "cray",
    "bg-primary-purple": color === "purple",
    "bg-primary-orange": color === "orange",
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
      name: "Ask It",
      description:
        "AskIt is a platform where you can share your questionnaire with a large & personalized target audience and get reliable feedback for your surveys",
      url: "https://askit.biz/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1734946539/Frame_799_m09kfv.png",
    },
    {
      name: "NinthGrid",
      description:
        "Ninthgrid is an image sourcing platform that helps users to Access high-quality Afrocentric images exclusively crafted by Black creators",
      url: "https://beta.ninthgrid.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231254/Frame_793_zz8k7r.png",
    },
    {
      name: "Rexa Android",
      description:
        "Rexa Finance App provides banking services for users where you can save money, invest, pay bills and do other banking related services.",
      url: "https://play.google.com/store/apps/details?id=app.adiba.capitalfield.miya&pcampaignid=web_share",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715903555/unnamed_3_iqo720.webp",
    },
    {
      name: "Rexa iOS",
      description:
        "Rexa Finance App provides banking services for users where you can save money, invest, pay bills and do other banking related services.",
      url: "https://apps.apple.com/ng/app/rexa-finance/id6446645311",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715903555/unnamed_3_iqo720.webp",
    },
    {
      name: "Learngual",
      description:
        "Learngual is a language learning platform where anyone can create his or her own class and onboard students to learn language both as a language instructor or enterprise (institution)",
      url: "https://learngual.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1690120309/Frame_790_esbomk.png",
    },
    {
      name: "Cashaam",
      description:
        "Cashaam E-commerce helps asian and african merchants sell their goods and services abroad.",
      url: "https://cashaam.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1675671257/my%20portfolio/Frame_788_kq8ywm.png",
    },
    {
      name: "Pays",
      description:
        "Pays is a platform where you can create cash vouchers for your business, love ones or as giveaways",
      url: "https://www.usepays.co/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1682722616/Frame_789_zxf7sk.png",
    },
    {
      name: "GetStac Android",
      description:
        "GetStac connects business and POS agent together, an helps in cash distribution among POS agents and businesses",
      url: "https://play.google.com/store/apps/details?id=com.cargle.getstacbeta&pcampaignid=web_share",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715904301/Frame_795_slntfn.png",
    },
    {
      name: "GetStac iOS",
      description:
        "GetStac connects business and POS agent together, an helps in cash distribution among POS agents and businesses",
      url: "https://apps.apple.com/ng/app/getstac/id6477868812",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1715904301/Frame_795_slntfn.png",
    },
    {
      name: "Adiba",
      description:
        "Adiba platform provides banking softwares for business that want to create digital banks. (Back-office, Transaction Apps, CRM tools etc.)",
      url: "http://adiba.app/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231253/Frame_791_kbdhnt.png",
    },
    {
      name: "Spikk Deliveries",
      description:
        "A delivery platform that helps in running errands for people and deliver it to their desired location",
      url: "https://spikk-deliveries.vercel.app/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231752/Frame_794_c1caqx.png",
    },
    {
      name: "Aljys",
      description:
        "A platform that connect artisan with their potential clients",
      url: "https://www.aljys.com/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1682721662/Frame_789_vhfo5s.png",
    },
    {
      name: "Zuri Chat",
      description:
        "A workspace Application that helps organization to manage its employee and for better organization structure",
      url: "https://www.zuri.chat/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1673579632/my%20portfolio/Frame_787_pgqy61.png",
    },
    {
      name: "Shiga",
      description:
        "A financial management platform that help people to create their own digital bank",
      url: "https://shiga.finance/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1695231253/Frame_792_pdr1by.png",
    },
    {
      name: "Re Scope",
      description:
        "Worked on implementing interactive dashboard for Rescope asset management that will help people to predict the best way to invest in real estate asset based on geographical location.",
      url: "https://www.rescope.earth/",
      image:
        "https://res.cloudinary.com/dmixz7eur/image/upload/v1673576774/my%20portfolio/Frame_780_xusmpl.png",
    },
  ];
  return (
    <ScrollArea className="h-screen w-[100%]">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"Projects"} />
        <span className="w-full bg-[#00000090] lg:px-[120px] p-8 py-16 gap-12 rounded-xl flex flex-col">
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
                <span className={cn("flex items-center gap-1", textColors)}>
                  <p className="text-[16px]">Title</p>
                </span>
                <h1 className="lg:text-[40px] text-[40px]">{item.name}</h1>
                <p className="text-[16px] font-thin">{item.description}</p>
                <Link href={`${item.url}`} target="_blank">
                  <button
                    className={cn(
                      "px-10 py-3 text-black-1000 my-5 rounded-full font-semibold",
                      backgroundColors
                    )}
                  >
                    View Project
                  </button>
                </Link>
              </span>
            </span>
          ))}
        </span>
      </div>
    </ScrollArea>
  );
}

export default PortfolioPage;
