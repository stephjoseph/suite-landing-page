import logo from "../images/logo.svg";
import patternCurvedLine1 from "../images/pattern-curved-line-1-mobile.svg";
import imgHeroLandscape from "../images/image-hero-landscape.png";

const Header = () => {
  return (
    <header className="mt-6 mb-14 flex w-[21.438rem] flex-col items-center">
      <div className="mb-[3.625rem] flex w-full items-center justify-between">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <a
          className="flex h-12 w-[11.375rem] items-center justify-center rounded-[6px] border border-solid border-[#172339] text-[0.875rem] font-bold leading-6 tracking-[-0.14px] text-[#172339]"
          href="#"
        >
          Request Beta Access
        </a>
      </div>
      <div className="mb-14 flex w-full flex-col items-start">
        <div className="pointer-events-none ml-[9.875rem] mb-2">
          <img src={patternCurvedLine1} alt="" />
        </div>
        <h1 className="mb-8 text-[2.375rem] font-normal leading-[2.75rem] tracking-[-0.53px] text-[#172339]">
          A <span className="font-bold">super solution</span> for your{" "}
          <span className="font-bold">business.</span>
        </h1>
        <p className="mb-8 text-base font-normal leading-[1.75rem] tracking-[0.09px] text-[#49566D]">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <a
          className="flex h-[3.813rem] w-[16rem] items-center justify-center rounded-[6px] bg-[#172339] text-lg font-bold leading-8 tracking-[-0.18px] text-[#FAF8F6]"
          href="#"
        >
          Request Beta Access
        </a>
      </div>
      <div className="mb-14">
        <img src={imgHeroLandscape} alt="" />
      </div>
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-[0.063rem] text-center">
          <p className="text-[3rem] font-bold leading-[3.5rem] tracking-normal text-[#172339]">
            2K+
          </p>
          <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#49566D]">
            Companies
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-[0.063rem] text-center">
          <p className="text-[3rem] font-bold leading-[3.5rem] tracking-normal text-[#172339]">
            8
          </p>
          <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#49566D]">
            Languages
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-[0.063rem] text-center">
          <p className="text-[3rem] font-bold leading-[3.5rem] tracking-normal text-[#172339]">
            1.2M
          </p>
          <p className="text-base font-normal uppercase leading-[1.625rem] tracking-[2.5px] text-[#49566D]">
            Leads
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
