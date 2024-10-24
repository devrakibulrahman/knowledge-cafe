import Post from "../BlogPost/Post";
import Bookmarks from "../Bookmarks/Bookmarks";
import PropTypes from "prop-types"; 

const Body = ({posts}) => {

    return (
        <div className="w-full h-auto flex flex-col justify-between gap-5 py-6 md:py-[30px] lg:flex-row xl:gap-6">
            <Post post={posts}></Post>
            <Bookmarks></Bookmarks>
        </div>
    );
};

Body.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Body;