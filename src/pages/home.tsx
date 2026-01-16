export default function Home() {
  return (
   
    <div className="px-[73px] pt-20">
      
      <div className="flex flex-col gap-4">
        <h1 className="font-inter font-bold text-[48px] leading-[100%] text-black">
          Hello User
        </h1>
        <p className="font-inter font-normal text-[22px] leading-[100%]">
          Explore your To-Do-List
        </p>
        <p className="font-inter font-bold text-[14px] leading-[100%] mt-6">
          Today Task
        </p>
      </div>

      <div className="flex gap-6 mt-10">

        <button className="flex items-center gap-3 bg-[#D9D9D9] h-[31px] px-4 rounded-[40px]">
          <div className="w-[36px] h-[20px] bg-[#B2B2B2] rounded-[40px]" />
          <span className="font-inter font-bold text-[10px]">All</span>
        </button>

        <button className="flex items-center gap-3 bg-[#D9D9D9] h-[31px] px-4 rounded-[40px]">
          <div className="w-[38px] h-[20px] bg-[#E8FAC9] rounded-[40px]" />
          <span className="font-inter font-bold text-[10px]">Health</span>
        </button>

        <button className="flex items-center gap-3 bg-[#D9D9D9] h-[31px] px-4 rounded-[40px]">
          <div className="w-[38px] h-[20px] bg-[#F8C1C2] rounded-[40px]" />
          <span className="font-inter font-bold text-[10px]">Assignment</span>
        </button>

        <button className="flex items-center gap-3 bg-[#D9D9D9] h-[31px] px-4 rounded-[40px]">
          <div className="w-[38px] h-[20px] bg-[#FFDFBD] rounded-[40px]" />
          <span className="font-inter font-bold text-[10px]">Work</span>
        </button>

      </div>
    </div>
  );
}
