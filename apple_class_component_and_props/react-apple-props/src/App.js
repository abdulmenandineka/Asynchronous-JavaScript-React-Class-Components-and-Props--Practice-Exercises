import "./common_resources/css/styles.css";
import "./App.css";
import Header from "./parentComponent1/ParentHeader";
import AllSectionWrapper from "./common_resources/TwoSectionWrapper";
import ParentFooter from "./parentComponent1/ParentFooter";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <AllSectionWrapper />
      <Main/>
      <ParentFooter />
    </>
  );
}

export default App;
