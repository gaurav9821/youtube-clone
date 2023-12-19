import React from "react";
import {
  HamBurgerIcon,
  YouTubeIcon,
  SearchSVG,
  MicSVG,
  UserSVG,
} from "../utils/images";
function Header() {
  return (
    <div className="sticky flex justify-between items-center h-[56px] py-[0px] px-[1rem] top-0 w-[100%] z-[97] bg-[#ffffff]">
      <div className="flex items-center w-[11rem gap-[0.5rem]">
        <div className="cursor-pointer w-[40px] h-[40px] p-[8px] justify-center flex items-center hover:bg-[#0000002e] rounded-[20px]">
          <HamBurgerIcon />
        </div>
        <div className="w-[129px] py-[18px] pl-[16px] pr-[14px]">
          <YouTubeIcon />
        </div>
      </div>
      <div className="w-[40rem] flex items-center h-[40px] gap-[12px]">
        <form className="relative flex items-center h-[100%] w-[100%] bg-[#ffffff] border-solid border-[#0000002e] border-[1px] border-[#ccc] rounded-[25px] py-[5px] px-[15px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[100%] pt-0 pr-[15px] pb-0 pl-0 text-[16px] font-[400] font-mono text-[#0f0f0f] bg-[#ffffff outline-none"
          />
          <div className="absolute h-[100%] w-[65px] top-0 right-0 pt-[8px] pr-[0px] pb-[0px] pl-[22px] bg-[#f8f8f8] hover:bg-[#0000002e] text-[#0f0f0f] fill-[#0f0f0f] rounded-[0px_40px_40px_0px] b-[1px] border-solid border-[#d3d3d3] cursor-pointer">
            <SearchSVG />
          </div>
        </form>
        <div className="m-0 cursor-pointer w-[40px] h-[40px] p-[8px] flex items-center justify-center fill-[#0f0f0f] bg-[#f2f2f2] hover:bg-[#0000002e] rounded-[20px]">
          <MicSVG />
        </div>
        <div></div>
      </div>
      <div>
        <div className="flex items-center w-max h-[35px] cursor-pointer border-solid border-[1px] border-[#0000002e] rounded-[20px] py-[5px] px-[10px] font-[500] fill-[#0f0f0f] gap-[5px]">
          <UserSVG />
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
