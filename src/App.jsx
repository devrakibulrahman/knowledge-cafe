import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import BodySection from "./components/BodySection/Body";
import Footer from "./components/Footer/Footer";

const App = () => {
  //? declare useState for hold data from useEffect add for others ----------------> 
  const [posts, setPost] = useState([]);
  const [bookmarks, setBookmark] = useState([]);
  const [numbers, setNumber] = useState(0);

  //? fetch data from api.json ---------------->
  useEffect(() => {
    fetch('api.json')
      .then((res) => res.json())
      .then((data) => setPost(data.posts))
      .catch((err) => console.log(err))
  }, []);

  //? all event handler declare here ----------------->
  const handleBookmark = (post_title) => {
    if(!bookmarks.includes(post_title)){
      const bookmark = [...bookmarks, post_title];
      setBookmark(bookmark);
    };
  };

  const handleMarkAsRead = (post_title, post_reading_time) => {
    const remainingBookmark = bookmarks.filter((mark) => mark.post_title !== post_title);
    setBookmark(remainingBookmark);
    spentTimesToReading(post_reading_time);
  };

  const spentTimesToReading = (readTime) => {
    setNumber(readTime);
    readingTimeSum(readTime);
  };

  //? reading time function declare ------------------->
  const readingTimeSum = (min) => {
    const spentTime = parseInt(numbers) + parseInt(min);
    setNumber(spentTime)
  };


  return (
    //? container --------------->
    <div className="container mx-auto px-3">
      <Header></Header>
      <BodySection posts={posts} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} bookmarks={bookmarks} numbers={numbers}></BodySection>
      <Footer></Footer>
    </div>
  );
};

export default App;
