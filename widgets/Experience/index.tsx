import Title from "@/components/Title";
import { cn } from "@/lib";
import { getTheme } from "@/lib/localStorage";
import { ScrollArea } from "@mantine/core";
import { LocationTick } from "iconsax-react";
import React, { useEffect, useState } from "react";

function ExperiencePage() {
  const theme = getTheme();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme) {
      setColor(theme);
    } else {
      setColor("orange");
    }
  }, [theme]);
  const textColors = {
    "text-primary-blue": color === "blue",
    "text-primary-red": color === "red",
    "text-primary-green": color === "green",
    "text-primary-yellow": color === "yellow",
    "text-primary-cray": color === "cray",
    "text-primary-purple": color === "purple",
    "text-primary-orange": color === "orange",
  };

  const experienceList = [
    {
      title: "Software Engineer",
      company: "Turog Technologies",
      location: "Lagos, Nigeria",
      date: "June 2023 - Present",
      comments: [
        "Built Back-office applications that is used to mange users, task and day to day activities for digital banks which has improved the banking efficiency and better work structure.",
        "Built CRM tools for digital banks, improving the organization and resolution of customer issues by customer care representatives.",
        "Managed a team of junior developers and interns, addressing daily challenges, ensuring product quality, and accelerating issue resolution.",
        "Built digital banks portfolio platforms that showcases core business values and attracts new users.",
        "Collaborated closely with the development team to design user interfaces that are visually appealing and intuitive for both the website and back-office applications, contributing to user retention for digital banks.",
        "Utilized feature-based architecture to make feature and functionality implementation seamless and efficient.",
      ],
    },
    {
      title: "Mobile (Android and IOS) Developer",
      company: "Spikk Deliveries",
      location: "Lagos, Nigeria",
      date: "January 2022 –  June 2023",
      comments: [
        "Developed the Spikk delivery app, enabling users to run delivery errands and purchase goods and services from home, resulting in a 25% increase in customer retention rate.",
        "Improved the user flow for the Spikk application, creating a shorter and easier customer journey and a more captivating UI",
        "Designed and developed user-friendly, responsive apps using React Native.",
        "Built iOS and Android apps to address the needs of Spikk riders and vendors.",
        "Utilized Redux and React Query to implement dynamic and interactive features within the mobile app.",
        "Collaborated with other developers to plan and execute mobile app development projects.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Cargle",
      location: "Lagos, Nigeria",
      date: "November 2022 –  June 2023",
      comments: [
        "Developed and maintained the Cargle website, resulting in a 30% increase in daily visitors.",
        "Built business web applications for Cargle clients such as Ninthgrid, Pays, and Prevet, significantly increasing their user engagement and customer retention rates.",
        "Implemented an SEO-optimized platform using Next.js, increasing visibility on Google and Bing.",
        "Created audience-captivating portfolio websites for Cargle clients.",
        "Collaborated with the design team to develop intuitive and visually appealing user interfaces for both websites and mobile apps.",
        "Implemented new features and functionality using React.js and Next.js.",
      ],
    },
  ];

  return (
    <ScrollArea className="h-screen">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"Experience"} />
        <span className="w-full bg-[#00000090] lg:p-16 p-8 py-16 grid  grid-cols-1 gap-16 rounded-2xl ">
          {experienceList.map((item, index) => (
            <span key={index} className="flex flex-col gap-2 flex-grow">
              <span className={cn("flex items-center gap-1", textColors)}>
                <LocationTick size="16" variant="Bold" />
                <p className="text-[16px]">{item.location}</p>
              </span>
              <p className={cn("text-white text-[28px]")}>{item.title}</p>
              <p className={cn("text-[20px]", textColors)}>{item.company}</p>
              <p className="text-[16px] italic font-thin">{item.date}</p>
              {item.comments?.map((item, index) => (
                <li className="text-[16px] font-thin" key={index}>
                  {item}
                </li>
              ))}
            </span>
          ))}
        </span>
      </div>
    </ScrollArea>
  );
}

export default ExperiencePage;
