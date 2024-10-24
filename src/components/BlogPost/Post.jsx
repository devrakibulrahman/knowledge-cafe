import 'boxicons/css/boxicons.min.css';
import 'remixicon/fonts/remixicon.css';
import PropTypes from "prop-types";

const Post = ({post, handleBookmark}) => {

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10">
            {
                post.map((post) => 
                    <div key={post.id} className="w-full sm:w-[616px] xl:w-full 2xl:w-full">
                        <div className="w-full rounded-lg mb-4 xl:mb-6 2xl:mb-8 overflow-hidden">
                            <img src={`${post.img}`} className='w-full object-cover'/>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <div className='w-auto flex items-center justify-center gap-3'>
                                <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]">
                                    <img src={`${post.profile}`}/>
                                </div>
                                <div className='w-auto'>
                                    <h1 className='font-exo2 text-[16px] leading-[160%] font-bold text-[#111111] md:text-lg lg:text-[20px] xl:text-2xl'>{post.author_name}</h1>
                                    <p className='font-exo2 text-xs leading-[160%] font-semibold text-[#11111199] md:text-sm 2xl:text-[16px] lg:mt-1'>{post.post_date}</p>
                                </div>
                            </div>
                            <div className='w-auto flex items-center justify-center gap-2 md:gap-3'>
                                <p className='font-exo2 text-sm leading-[24px] font-medium text-[#11111199] md:text-[16px] 2xl:text-xl'>{post.post_reading_time} min read</p>
                                <div className='w-auto flex items-center justify-center cursor-pointer' onClick={() => handleBookmark(post)}>
                                    <i className="ri-bookmark-line text-[#11111199] md:text-[18px] 2xl:text-2xl transition-all ease-in-out duration-200 hover:text-[#6047EC]"></i>
                                </div>
                            </div>
                        </div>
                        <div className='w-full max-w-[300px] mt-4 md:max-w-[400px] xl:max-w-[500px] xl:mt-5'>
                            <h1 className='font-exo2 text-lg leading-[160%] font-bold md:text-xl xl:text-2xl xl:leading-[165%]'>{post.post_title}</h1>
                        </div>
                        <div className='w-full flex items-center gap-4 mt-4'>
                            {
                                post.hashtags.map((tag) => 
                                    <p key={tag} className='font-exo2 text-sm leading-[24px] font-medium text-[#11111199] md:text-[16px] 2xl:text-xl'>{tag}</p>
                                )
                            }
                        </div>
                        <div className="w-full mt-5">
                            <p className='font-exo2 text-sm leading-[24px] font-medium text-[#6047EC] md:text-[16px] 2xl:text-xl underline cursor-pointer transition-all ease-in-out duration-200 hover:text-[#806cee]'>Mark as read</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Post.propTypes =  {
    post: PropTypes.array.isRequired,
    handleBookmark: PropTypes.func.isRequired,
};

export default Post;