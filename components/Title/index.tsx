import { cn } from "@/lib";
import { getTheme } from "@/lib/localStorage";
import React, { useEffect, useState } from "react";

function Title({ title }: any) {
  const theme = getTheme();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme) {
      setColor(theme);
    } else {
      setColor("orange");
    }
  }, [theme]);
  return (
    <span className="flex flex-col items-center justify-center bg-[#00000080] py-5 px-6 w-full">
      <h1 className="text-[40px] text-center mx-auto">{title}</h1>
      <span className="flex flex-col items-start gap-1">
        <span
          className={cn("w-24 h-[6px] rounded-br-xl rounded-tl-xl ", {
            "bg-primary-blue": color === "blue",
            "bg-primary-red": color === "red",
            "bg-primary-green": color === "green",
            "bg-primary-yellow": color === "yellow",
            "bg-primary-cray": color === "cray",
            "bg-primary-purple": color === "purple",
            "bg-primary-orange": color === "orange",
          })}
        ></span>
        <span
          className={cn("w-16 h-[6px] rounded-b-xl ", {
            "bg-primary-blue": color === "blue",
            "bg-primary-red": color === "red",
            "bg-primary-green": color === "green",
            "bg-primary-yellow": color === "yellow",
            "bg-primary-cray": color === "cray",
            "bg-primary-purple": color === "purple",
            "bg-primary-orange": color === "orange",
          })}
        ></span>
      </span>
    </span>
  );
}

export default Title;
