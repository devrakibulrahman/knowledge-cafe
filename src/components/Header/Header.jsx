const Header = () => {

    return (
        <>
            <div className="w-full py-[16px] flex items-center justify-between border-b border-[#11111126] md:py-[20px] lg:py-[25px] xl:py-[30px]">
                <h1 className="font-exo2 text-xl leading-[160%] font-bold text-[#111111] md:text-2xl xl:text-3xl 2xl:text-[40px]">KnowledgeHub Cafe</h1>
                <div className="w-[35px] h-[35px] md:w-[42px] md:h-[42px] lg:w-[45px] lg:h-[45px] xl:w-[60px] xl:h-[60px]">
                    <img src="./img/profile.png"/>
                </div>
            </div>
        </>
    );
};

export default Header;