export default function Home() {
  return (
    <div>
   
    <div>
      <h1 className="absolute  w-[248px] h-[62px] top-20 left-[73px] font-inter font-bold text-[48px] leading-[100%] tracking-[0%] text-black">Hello User</h1>
      <p className="absolute w-[250px] h-[27px] top-[137px] left-[74px]  font-inter font-normal text-[22px] leading-[100%] tracking-[0%]">Explore your To-Do-List</p>
      <p className="absolute w-[225px] h-[21px] top-[190px] left-[73px] font-inter font-bold text-[14px] leading-[100%] tracking-[0%]">Today Task</p>
    </div>
<div className="relative">
  {/*all */}
  <button className="absolute w-[137px] h-[31px] top-[241px] left-[108px] bg-[#D9D9D9] rounded-[40px]"></button>
  <h1 className="absolute w-[39px] h-[12px] top-[249px] left-[180px] font-inter font-bold text-[10px] leading-[100%] tracking-[0%]">All</h1>
  <div className="absolute w-[36px] h-[20px] top-[246px] left-[120px] bg-[#B2B2B2] rounded-[40px] flex items-center justify-center "></div>

  <button className="absolute  w-[153px] h-[31px] top-[241px] left-[257px] bg-[#D9D9D9] rounded-[40px]"></button>
  <h1 className="absolute w-[79px] h-[12px] top-[249px] left-[317px] font-inter font-bold text-[10px] leading-[100%] tracking-[0%]">Health</h1>
  <div className="absolute w-[38px] h-[20px] top-[246px] left-[270px] bg-[#E8FAC9] rounded-[40px] flex items-center justify-center "></div>
  
  <button className="absolute w-[216px] h-[31px] top-[241px] left-[431px] bg-[#D9D9D9] rounded-[40px]"></button>
  <h1 className="absolute w-[139px] h-[12px] top-[249px] left-[494px] font-inter font-bold text-[10px] leading-[100%] tracking-[0%]">Assignment</h1>
  <div className="absolute w-[38px] h-[20px] top-[246px] left-[444px] bg-[#F8C1C2] rounded-[40px] flex items-center justify-center "></div>

  <button className="absolute w-[143px] h-[31px] top-[241px] left-[666px] bg-[#D9D9D9] rounded-[40px]"></button>
  <h1 className="absolute w-[64px] h-[12px] top-[249px] left-[726px] font-inter font-bold text-[10px] leading-[100%] tracking-[0%]">Work</h1>
  <div className="absolute w-[38px] h-[20px] top-[246px] left-[679px] bg-[#FFDFBD] rounded-[40px] flex items-center justify-center "></div>








</div>
    </div>
  );
}
