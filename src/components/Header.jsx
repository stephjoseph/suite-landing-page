import logo from "../images/logo.svg";
import mobilePatternCurvedLine1 from "../images/pattern-curved-line-1-mobile.svg";
import tabletPatternCurvedLine1 from "../images/pattern-curved-line-1-tablet.svg";
import desktopPatternCurvedLine1 from "../images/pattern-curved-line-1-desktop.svg";
import imgHeroLandscape from "../images/image-hero-landscape.png";

const Header = () => {
  return (
    <header className="mt-6 mb-14 flex w-[21.438rem] flex-col items-center md:mb-[5.75rem] md:w-[43.063rem] xl:mb-[9rem] xl:w-[69.375rem]">
      <div className="mb-[3.625rem] flex w-full items-center justify-between md:mb-20 xl:mb-[4.188rem]">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <a
          className="flex h-12 w-[11.375rem] items-center justify-center rounded-[6px] border border-solid border-[#172339] text-[0.875rem] font-bold leading-6 tracking-[-0.14px] text-[#172339] hover:bg-[#172339] hover:text-[#FAF8F6] active:bg-[#172339] active:text-[#FAF8F6] md:h-14 md:w-[13.688rem] md:text-base md:leading-8 md:tracking-[-0.16px]"
          href="#"
        >
          Request Beta Access
        </a>
      </div>
      <div className="flex w-full flex-col gap-14 md:gap-[5.5rem] xl:h-[37.5rem] xl:flex-row xl:items-center xl:gap-[6rem]">
        <div
          id="hero"
          className="flex w-full flex-col items-start xl:h-[37.5rem] xl:w-[51.5rem]"
        >
          <div className="pointer-events-none ml-[9.875rem] mb-2 md:mb-4 md:ml-[13.938rem] md:mt-[2.625rem] xl:mb-[1.375rem] xl:ml-[18.125rem] xl:mt-[2.813rem]">
            <img className="md:hidden" src={mobilePatternCurvedLine1} alt="" />
            <img
              className="hidden md:block xl:hidden"
              src={tabletPatternCurvedLine1}
              alt=""
            />
            <img
              className="hidden  xl:block"
              src={desktopPatternCurvedLine1}
              alt=""
            />
          </div>
          <h1 className="mb-8 text-[2.375rem] font-normal leading-[2.75rem] tracking-[-0.53px] text-[#172339] md:mb-10 md:w-[35.813rem] md:text-[3.5rem] md:leading-[4rem] md:tracking-[-0.78px] xl:w-[39.688rem] xl:text-[4.5rem] xl:leading-[4.875rem] xl:tracking-[-1px]">
            A <span className="font-bold">super solution</span>{" "}
            <br className="hidden md:inline" /> for your{" "}
            <span className="font-bold">business.</span>
          </h1>
          <p className="mb-8 text-base font-normal leading-[1.75rem] tracking-[0.09px] text-[#49566D] md:mb-10 md:w-[21.875rem] xl:mb-[3.25rem]">
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>
          <a
            className="flex h-[3.813rem] w-[16rem] items-center justify-center rounded-[6px] bg-[#172339] text-lg font-bold leading-8 tracking-[-0.18px] text-[#FAF8F6] hover:bg-gradient-to-br hover:from-[#A060FF] hover:via-[#CB30E3] hover:to-[#FFA84E] hover:text-[#FAF8F6] active:bg-gradient-to-br active:from-[#A060FF] active:via-[#CB30E3] active:to-[#FFA84E] active:text-[#FAF8F6] md:mb-10 xl:mb-[5.75rem]"
            href="#"
          >
            Request Beta Access
          </a>
        </div>
        <div className="md:hidden">
          <img src={imgHeroLandscape} alt="" />
        </div>
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-[0.635] xl:w-[11.875rem] xl:flex-col xl:items-start xl:gap-16">
          <div className="flex w-full flex-col items-center gap-[0.063rem] text-center xl:items-start xl:text-left">
            <p className="text-[3rem] font-bold leading-[3.5rem] tracking-normal text-[#172339]">
              2K+
            </p>
            <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#49566D]">
              Companies
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-[0.063rem] text-center xl:items-start xl:text-left">
            <p className="text-[3rem] font-bold leading-[3.5rem] tracking-normal text-[#172339]">
              8
            </p>
            <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#49566D]">
              Languages
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-[0.063rem] text-center xl:items-start xl:text-left">
            <p className="text-[3rem] font-bold leading-[3.5rem] tracking-normal text-[#172339]">
              1.2M
            </p>
            <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#49566D]">
              Leads
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
