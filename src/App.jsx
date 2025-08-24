import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Store from "./components/Store";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <Store/>
      <About/>
    </div>
  );
};

export default App;
