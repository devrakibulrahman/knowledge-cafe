import Post from "../BlogPost/Post";
import Bookmarks from "../Bookmarks/Bookmarks";

const Body = () => {

    return (
        <div className="w-full h-auto flex flex-col justify-between gap-5 mt-6 md:mt-[30px] lg:flex-row xl:gap-6">
            <Post></Post>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default Body;