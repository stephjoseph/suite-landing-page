import imgJeremySmall from "../images/image-jeremy-small.png";
import imgJeremyMedium from "../images/image-jeremy-medium.png";
import imgJeremyLarge from "../images/image-jeremy-large.png";
import patternCurvedLine2 from "../images/pattern-curved-line-2.svg";

const Main = () => {
  return (
    <main className="flex w-[23.438rem] flex-col items-center md:w-[43.063rem] xl:w-[69.375rem] xl:items-start">
      <div className="z-10">
        <img
          className="pointer-events-none h-[25.125rem]  w-[21.438rem] md:hidden"
          src={imgJeremySmall}
          alt=""
        />
        <img
          className="pointer-events-none hidden h-[25.125rem]  w-full md:block xl:hidden"
          src={imgJeremyMedium}
          alt=""
        />
        <img
          className="pointer-events-none hidden w-[35.375rem] xl:block"
          src={imgJeremyLarge}
          alt=""
        />
      </div>
      <div className="z-0 -mt-[13.813rem] flex w-full flex-col items-center rounded-[15px] bg-[#172339] pb-16 pt-[16.313rem] text-center xl:-mt-[40rem] xl:flex-row xl:items-start xl:gap-[3.313rem] xl:py-[5.5rem] xl:pr-[7.813rem] xl:pl-[32.25rem]">
        <div className="mb-[2.313rem] xl:mb-0 xl:mt-[4.5rem]">
          <img
            className="h-10 w-[3.079rem] xl:h-[3.25rem] xl:w-16"
            src={patternCurvedLine2}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center text-center xl:w-[21.875rem] xl:items-start xl:text-left">
          <h2 className="mb-10 text-[2.5rem] font-normal leading-[3rem] tracking-[-0.42px] text-[#FAF8F6] xl:text-[3rem] xl:leading-[3.5rem] xl:tracking-[-0.5px]">
            It just <span className="font-bold">works.</span>
          </h2>
          <blockquote className="mb-10 w-[21.438rem] text-lg font-normal leading-8 tracking-[0.09px] text-[#F3EDE7] md:w-[35.813rem] xl:w-[21.875rem] xl:text-[1.25rem] xl:leading-[2.188rem] xl:tracking-[0.1px]">
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </blockquote>
          <div className="flex flex-col items-center xl:items-start">
            <p className="text-lg font-bold uppercase leading-8 tracking-[-0.18px] text-[#FAF8F6]">
              Jeremy Robinson
            </p>
            <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#F3EDE7]">
              CMO, FYLO
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
