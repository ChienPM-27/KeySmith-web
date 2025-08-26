import React from "react";
import Header from "./components/Header";
import Store from "./components/Store";
import Contact from "./components/Contact";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className="w-full overflow-hidden" >
      <ToastContainer/>
      <Header/>
      <div style={{backgroundImage: "url('/bg.svg')" }}>
        <Store/>
        <Contact/>
      </div>
        
    </div>
  );
};

export default App;
