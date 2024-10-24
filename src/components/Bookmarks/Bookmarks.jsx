
const Bookmarks = () => {

    return (
        <div className="w-full flex items-center flex-col gap-4 xl:w-[650px] 2xl:w-[750px]">
            <div className="w-full p-5 bg-[#6047EC1A] border border-[#6047EC] rounded-lg flex items-center justify-center sm:w-[616px] lg:w-full">
                <p className="font-exo2 text-[16px] leading-[160%] font-bold text-[#6047EC] md:text-lg xl:text-xl">Spent time on read : 177 min</p>
            </div>
            <div className="w-full min-h-10 rounded-lg bg-[#1111110D] p-5 sm:w-[616px] lg:w-full">
                <div className="w-full mb-4">
                    <h1 className="font-exo2 text-[16px] leading-[160%] font-bold text-[#111111] md:text-lg xl:text-xl">Bookmarked Blogs : 8</h1>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <div className="w-full p-4 bg-white rounded-lg">
                        <div className="w-full max-w-[350px]">
                            <p className="font-exo2 text-sm leading-[160%] font-semibold text-[#111111] md:text-[16px]">Master Microsoft Power Platform and Become an In-Demand!</p>
                        </div>
                    </div>
                    <div className="w-full p-4 bg-white rounded-lg">
                        <div className="w-full max-w-[350px]">
                            <p className="font-exo2 text-sm leading-[160%] font-semibold text-[#111111] md:text-[16px]">Master Microsoft Power Platform and Become an In-Demand!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;