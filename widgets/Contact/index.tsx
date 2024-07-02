import Title from "@/components/Title";
import { useThemeContext } from "@/contetxt/ThemeContext";
import { cn } from "@/lib";
import { ScrollArea } from "@mantine/core";
import {
  Call,
  CodeCircle,
  Instagram,
  OceanProtocol,
  Whatsapp,
  Xrp,
} from "iconsax-react";
import React from "react";

function ContactPage() {
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

  const data = [
    { text: "+234906 682 1545", icon: Call, link: "+2349066821545" },
    {
      text: "aybamz181@gmail.com",
      icon: Call,
      link: "mailto:aybamz181@gmail.com",
    },
    {
      text: "@bamzz_paul",
      icon: Xrp,
      link: "https://twitter.com/bamzz_paul",
    },
    {
      text: "LinkedIn",
      icon: OceanProtocol,
      link: "https://www.linkedin.com/in/ayobami-paul-4bb370259/",
    },
    {
      text: "WhatsApp",
      icon: Whatsapp,
      link: "https://wa.me/2349066821545",
    },
    {
      text: "Github",
      icon: CodeCircle,
      link: "https://github.com/AY-BAMZ",
    },
    {
      text: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/bamzzdev/",
    },
  ];
  return (
    <ScrollArea className="h-screen w-full">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"Contact"} />
        <span className="w-full bg-[#00000090] lg:p-16 p-8 py-16 grid  grid-cols-1 gap-16 rounded-2xl ">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {data.map((item, index) => (
              <a href={item.link} key={index}>
                <div className="flex items-center  gap-4 col-span-1 bg-[#0E0F10] p-6 py-5 rounded-2xl upper-trans">
                  <item.icon
                    size={28}
                    variant="Bold"
                    className={cn("", textColors)}
                  />
                  <p className={cn("text-white text-[20px]")}>{item.text}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h4>Or Send a message</h4>
              <a href="https://wa.me/2349066821545">
                <button
                  className={cn(
                    "px-10 py-3 text-black-1000 my-5 rounded-full font-semibold",
                    backgroundColors
                  )}
                >
                  Send a Direct Message
                </button>
              </a>
            </div>
          </div>
        </span>
      </div>
    </ScrollArea>
  );
}

export default ContactPage;
