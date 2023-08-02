import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
