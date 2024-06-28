import Wrapper from "@/widgets/Wrapper";

export default function HomePage() {
  return (
    <Wrapper>
      <span className="flex flex-col lg:gap-4 gap-2 items-center">
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
