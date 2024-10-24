import Header from "./components/Header/Header";
import BodySection from "./components/BodySection/Body";

const App = () => {

  return (
    //? container --------------->
    <div className="container mx-auto px-3">
      <Header></Header>
      <BodySection></BodySection>
    </div>
  );
};

export default App;
