import Post from "../BlogPost/Post";
import Bookmarks from "../Bookmarks/Bookmarks";

const Body = () => {

    return (
        <div className="w-full h-auto flex flex-col items-center justify-between gap-4 mt-6 md:mt-[30px]">
            <Bookmarks></Bookmarks>
            <Post></Post>
        </div>
    );
};

export default Body;