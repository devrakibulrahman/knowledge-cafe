import { useEffect } from "react";
import Header from "./components/Header/Header";
import BodySection from "./components/BodySection/Body";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  //? declare useState for hold data from useEffect ----------------> 
  const [posts, setPost] = useState([]);

  //? fetch data from api.json ---------------->
  useEffect(() => {
    fetch('api.json')
      .then((res) => res.json())
      .then((data) => setPost(data.posts))
      .catch((err) => console.log(err))
  }, []);


  return (
    //? container --------------->
    <div className="container mx-auto px-3">
      <Header></Header>
      <BodySection posts={posts}></BodySection>
      <Footer></Footer>
    </div>
  );
};

export default App;
