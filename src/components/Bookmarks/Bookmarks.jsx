
const Bookmarks = () => {

    return (
        <div className="w-full flex items-center justify-center flex-col gap-4">
            <div className="w-full p-5 bg-[#6047EC1A] border border-[#6047EC] rounded-lg flex items-center justify-center sm:w-[616px]">
                <p className="font-exo2 text-[16px] leading-[160%] font-bold text-[#6047EC] md:text-lg">Spent time on read : 177 min</p>
            </div>
            <div className="w-full min-h-10 rounded-lg bg-[#1111110D] p-5 sm:w-[616px]">
                <div className="w-full mb-4">
                    <h1 className="font-exo2 text-[16px] leading-[160%] font-bold text-[#111111] md:text-lg">Bookmarked Blogs : 8</h1>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <div className="w-full p-4 bg-white rounded-lg">
                        <p className="font-exo2 text-sm leading-[160%] font-semibold text-[#111111] md:text-[16px]">Master Microsoft Power Platform and Become an In-Demand!</p>
                    </div>
                    <div className="w-full p-4 bg-white rounded-lg">
                        <p className="font-exo2 text-sm leading-[160%] font-semibold text-[#111111] md:text-[16px]">Master Microsoft Power Platform and Become an In-Demand!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;