import Title from "@/components/Title";
import { useThemeContext } from "@/contetxt/ThemeContext";
import { cn } from "@/lib";
import { ScrollArea } from "@mantine/core";
import {
  BinanceCoin,
  Book1,
  Code1,
  Cpu,
  CpuCharge,
  Game,
  LocationTick,
  MedalStar,
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
import React from "react";

function AboutPage() {
  const { color }: any = useThemeContext();

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
  const services = [
    {
      name: "FrontEnd Development",
      description:
        "I have extensive expertise and experience in FrontEnd development, making me a highly skilled professional in this field.",
      icon: Monitor,
    },
    {
      name: "Mobile App Development",
      description:
        "I’m an experienced and skilled mobile app developer with a strong background in developing user-friendly and visually appealing Applications",
      icon: Mobile,
    },
    {
      name: "BackEnd Development",
      description:
        "As a professional backend developer, I utilize Node.js and Express to develop and deploy robust backend services.",
      icon: Code1,
    },
    {
      name: "FullStack Development",
      description:
        "I have extensive expertise and experience in FrontEnd and Backend development, making me a highly skilled professional in this field.",
      icon: Monitor,
    },
    {
      name: "Web App Development",
      description:
        "I am capable of ensuring that web applications are well built and and up to standard and are responsive and accessible on all devices",
      icon: Monitor,
    },
    {
      name: "iOS Development",
      description:
        "I’m an experienced and skilled mobile app developer with a strong background in developing user-friendly and visually appealing Applications",
      icon: CpuCharge,
    },
    {
      name: "Website Optimization",
      description:
        "I possess the knowledge and skills to optimize website performance, reduce loading time and enhance user experience. ",
      icon: MonitorMobbile,
    },
    {
      name: "Mobile App Optimization",
      description:
        "I possess the knowledge and skills to optimize Mobile App performance, reduce loading time and enhance user experience. ",
      icon: MobileProgramming,
    },
  ];

  const interests = [
    { name: "Music", icon: Music },
    { name: "Book", icon: Book1 },
    { name: "Technology", icon: Cpu },
    { name: "Games", icon: Game },
    { name: "Movies", icon: VideoPlay },
    { name: "TedX", icon: VideoHorizontal },
    { name: "Trading", icon: PresentionChart },
    { name: "Crypto", icon: BinanceCoin },
  ];
  const backgroundColors = {
    "bg-primary-blue": color === "blue",
    "bg-primary-red": color === "red",
    "bg-primary-green": color === "green",
    "bg-primary-yellow": color === "yellow",
    "bg-primary-cray": color === "cray",
    "bg-primary-purple": color === "purple",
    "bg-primary-orange": color === "orange",
  };

  return (
    <ScrollArea className="h-screen">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"About Me"} />
        <span className="w-full bg-[#00000090] p-8 py-16 flex flex-col gap-16 rounded-2xl upper-trans">
          <span className="flex lg:flex-row flex-col items-center gap-6">
            <Image
              src="https://res.cloudinary.com/dmixz7eur/image/upload/v1718836708/21A17C5B-0536-4E7B-945C-F67C766385BB_1_201_a_saj6vf.jpg"
              alt=""
              width={260}
              height={260}
              className="object-cover aspect-square w-[260px] h-auto rounded-full mx-auto"
            />
            <span className="flex flex-col gap-2 flex-grow">
              <p className={cn("text-white text-[20px]")}>
                Ayobami Paul Adegbohungbe
              </p>
              <span className={cn("flex items-center gap-1", textColors)}>
                <LocationTick size="16" variant="Bold" />
                <p className="text-[16px]">Lagos Nigeria</p>
              </span>
              <p className="text-[16px] font-thin">
                I’m an experienced and skilled FullStack & mobile app developer
                with a strong background in developing user- friendly and
                visually appealing websites and mobile applications using a
                variety of languages and frameworks such as REACT JS and REACT
                NATIVE, NODE JS, SWIFT UI. I have proven ability to work
                independently and as part of a team to deliver high-quality
                software on time and within budget. <br /> <br />
                My skills include having the ability to listen and communicate
                with others verbally and in writing. This is very important in
                order to collaborate with team members and solve problems. I
                have excellent problem-solving skills and the ability to work
                effectively while meeting tight deadlines.
              </p>
            </span>
          </span>
          <span className="grid lg:grid-cols-4 grid-cols-1 gap-6">
            <span className="flex gap-4 col-span-1">
              <span
                className={cn(
                  "w-14 h-12 flex items-center justify-center rounded-full border-[2px] border-white",
                  borderColors
                )}
              >
                <MedalStar size={28} variant="Bold" className="" />
              </span>
              <span>
                <p className="text-[16px]">5 Years</p>
                <p className={cn("text-[13px]", textColors)}>Experience</p>
              </span>
            </span>
            <span className="flex gap-4 col-span-1">
              <span
                className={cn(
                  "w-14 h-12 flex items-center justify-center rounded-full border-[2px] border-white",
                  borderColors
                )}
              >
                <MedalStar size={28} variant="Bold" className="" />
              </span>
              <span>
                <p className="text-[16px]">15+ Projects</p>
                <p className={cn("text-[13px]", textColors)}>Completed</p>
              </span>
            </span>
            <span className="flex gap-4 col-span-1">
              <span
                className={cn(
                  "w-14 h-12 flex items-center justify-center rounded-full border-[2px] border-white",
                  borderColors
                )}
              >
                <MedalStar size={28} variant="Bold" className="" />
              </span>
              <span>
                <p className="text-[16px]">Consultation</p>
                <p className={cn("text-[13px]", textColors)}>Available</p>
              </span>
            </span>
            <span className="col-span-1 flex gap-4">
              <a
                href="/myfile.pdf"
                download="Ayobami Paul Adegbohungbe Resume"
                style={{ alignItems: "left", display: "flex" }}
              >
                <button
                  className={cn(
                    "px-10 py-3 text-black-1000  rounded-full font-semibold",
                    backgroundColors
                  )}
                >
                  Download Resume
                </button>
              </a>
            </span>
          </span>
        </span>
        <span className="my-12 w-full">
          <Title title={"Services"} />
          <span className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-8 ">
            {services.map((item, index) => (
              <span
                key={index}
                className="flex flex-col items-center justify-center gap-4 col-span-1 bg-[#00000090] p-6 py-12 rounded-2xl upper-trans"
              >
                <span
                  className={cn(
                    "w-16 h-16 flex items-center justify-center rounded-full border-[2px] border-white",
                    borderColors
                  )}
                >
                  <item.icon size={28} className="" />
                </span>
                <p className={cn("text-white text-[20px]")}>{item.name}</p>
                <p className="text-[14px] font-thin text-center">
                  {item?.description}
                </p>
              </span>
            ))}
          </span>
        </span>
        <span className="my-12 w-full">
          <Title title={"Interests"} />
          <span className="grid lg:grid-cols-5 grid-cols-1 gap-6 mt-8 p-8 bg-[#00000090] ">
            {interests.map((item, index) => (
              <span
                key={index}
                className="flex items-center  gap-4 col-span-1 bg-[#0E0F10] p-6 py-5 rounded-2xl upper-trans  lg:justify-start justify-center"
              >
                <item.icon
                  size={28}
                  variant="Bold"
                  className={cn("", textColors)}
                />
                <p className={cn("text-white text-[20px]")}>{item.name}</p>
              </span>
            ))}
          </span>
        </span>
      </div>
    </ScrollArea>
  );
}

export default AboutPage;
