import Post from "../BlogPost/Post";
import Bookmarks from "../Bookmarks/Bookmarks";
import PropTypes from "prop-types"; 

const Body = ({posts, handleBookmark, handleMarkAsRead, bookmarks, numbers}) => {

    return (
        <div className="w-full h-auto flex flex-col justify-between gap-5 py-6 md:py-[30px] lg:flex-row xl:gap-6">
            <Post post={posts} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Post>
            <Bookmarks bookmarks={bookmarks} numbers={numbers}></Bookmarks>
        </div>
    );
};

Body.propTypes = {
    posts: PropTypes.array.isRequired,
    bookmarks: PropTypes.array.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
    numbers: PropTypes.number.isRequired
}

export default Body;