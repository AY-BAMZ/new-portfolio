import Title from "@/components/Title";
import { useThemeContext } from "@/contetxt/ThemeContext";
import { cn } from "@/lib";
import { Progress, RingProgress, ScrollArea, Text } from "@mantine/core";
import React from "react";

function SkillsPage() {
  const ratings = [
    {
      skill: "HTML/HTML5",
      rate: 90,
    },
    {
      skill: "CSS",
      rate: 90,
    },
    {
      skill: "React JS",
      rate: 95,
    },
    {
      skill: "NodeJS & Express",
      rate: 95,
    },
    {
      skill: "NodeJS & Express",
      rate: 95,
    },
    {
      skill: "ML and AI",
      rate: 75,
    },
    {
      skill: "Next JS",
      rate: 90,
    },
    {
      skill: "React Native",
      rate: 90,
    },
    {
      skill: "Expo",
      rate: 90,
    },
    {
      skill: "Swift",
      rate: 80,
    },
    {
      skill: "SwiftUI",
      rate: 85,
    },
    {
      skill: "Tailwind",
      rate: 90,
    },
    {
      skill: "Redux",
      rate: 90,
    },
    {
      skill: "DevOps",
      rate: 70,
    },
  ];

  const { color }: any = useThemeContext();

  const textColors = {
    "text-primary-blue": color === "blue",
    "text-primary-red": color === "red",
    "text-primary-green": color === "green",
    "text-primary-yellow": color === "yellow",
    "text-primary-cray": color === "cray",
    "text-primary-purple": color === "purple",
    "text-primary-orange": color === "orange",
  };
  return (
    <ScrollArea className="h-screen w-full">
      <div className="w-full lg:px-16 p-6 flex flex-col gap-8 py-6 bg-[#0E0F10]">
        <Title title={"Skills"} />
        <span className="w-full bg-[#00000090] p-8 py-16 grid lg:grid-cols-2 grid-cols-1 gap-8 rounded-2xl">
          <span className="col-span-1 flex flex-col gap-7 w-full">
            {ratings.map((item, index) => (
              <span>
                <p className={cn("text-white text-[16px] mb-2", textColors)}>
                  {item.skill}
                </p>
                <Progress
                  h={16}
                  value={item.rate}
                  key={index}
                  w={"100%"}
                  color={"#aaa"}
                  animated
                  bg={"#444"}
                />
              </span>
            ))}
          </span>
          <span className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-6 col-span-1">
            {ratings.map((item, index) => (
              <RingProgress
                key={index}
                size={200}
                thickness={6}
                roundCaps
                rootColor={"#1f1f1f"}
                sections={[{ value: item.rate, color: "white" }]}
                className="mx-auto col-span-1"
                label={
                  <>
                    <Text
                      c={"white"}
                      fw={500}
                      ta="center"
                      size="50px"
                      className={cn("text-white")}
                    >
                      {item.rate}%
                    </Text>
                    <Text
                      c={"white"}
                      fw={300}
                      ta="center"
                      size="16px"
                      className={cn("text-white mt-1", textColors)}
                    >
                      {item.skill}
                    </Text>
                  </>
                }
              />
            ))}
          </span>
        </span>
      </div>
    </ScrollArea>
  );
}

export default SkillsPage;
