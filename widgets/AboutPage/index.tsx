import Title from "@/components/Title";
import { LocationTick } from "iconsax-react";
import React from "react";

function AboutPage() {
  return (
    <div className="w-full p-6 flex flex-col gap-6">
      <Title title={"About Me"} />
      <span className="w-full bg-[#00000090] p-6 flex flex-col gap-5">
        <span>
          <p className="text-white text-[24px]">Ayobami Paul Adegbohungbe</p>
          <span className="flex items-center gap-1">
            <LocationTick size="16" variant="Bold" />
            <p className="text-[16px]">Lagos Nigeria</p>
          </span>
        </span>
      </span>
    </div>
  );
}

export default AboutPage;
