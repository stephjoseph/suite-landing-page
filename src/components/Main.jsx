import imgJeremySmall from "../images/image-jeremy-small.png";
import patternCurvedLine2 from "../images/pattern-curved-line-2.svg";

const Main = () => {
  return (
    <main className="flex w-[23.438rem] flex-col items-center">
      <div className="z-10">
        <img
          className="pointer-events-none  h-[25.125rem] w-[21.438rem]"
          src={imgJeremySmall}
          alt=""
        />
      </div>
      <div className="z-0 -mt-[13.813rem] flex w-full flex-col items-center rounded-[15px] bg-[#172339] pb-16 pt-[16.313rem] text-center">
        <div className="mb-[2.313rem]">
          <img className="h-10 w-[3.079rem]" src={patternCurvedLine2} alt="" />
        </div>
        <h2 className="mb-10 text-[2.5rem] font-normal leading-[3rem] tracking-[-0.42px] text-[#FAF8F6]">
          It just <span className="font-bold">works.</span>
        </h2>
        <blockquote className="mb-10 w-[21.438rem] text-lg font-normal leading-8 tracking-[0.09px] text-[#F3EDE7]">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </blockquote>
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold uppercase leading-8 tracking-[-0.18px] text-[#FAF8F6]">
            Jeremy Robinson
          </p>
          <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#F3EDE7]">
            CMO, FYLO
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
