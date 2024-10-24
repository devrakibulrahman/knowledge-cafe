import Header from "./components/Header/Header";
import BodySection from "./components/BodySection/Body";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    //? container --------------->
    <div className="container mx-auto px-3">
      <Header></Header>
      <BodySection></BodySection>
      <Footer></Footer>
    </div>
  );
};

export default App;
