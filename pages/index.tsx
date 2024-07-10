import Wrapper from "@/widgets/Wrapper";
import Image from "next/image";

export default function HomePage() {
  return (
    <Wrapper>
      <span className="flex flex-col lg:gap-4 gap-2 items-center">
        <Image
          src="https://res.cloudinary.com/dmixz7eur/image/upload/v1720629973/Rectangle_4049_wrppju.png"
          alt=""
          width={260}
          height={260}
          className="object-cover aspect-square w-[260px] h-auto rounded-full mx-auto"
        />
        <h1 className="lg:text-[52px] text-[40px] text-center">
          Ayobami Paul Ade.
        </h1>
        <p className="text-white lg:text-[30px] text-[24px]">
          Software Engineer
        </p>
      </span>
    </Wrapper>
  );
}
