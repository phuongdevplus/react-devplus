import Header from "./components/Header";
import React from "react";
import OurMain from "./components/DpCampus";



function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <div className="container-fluid"
        style={{backgroundColor: "rgba(0, 0, 255, 0.1)", height: '1000px'}}>
      </div>
      <OurMain/>
    </div>
  );
}

export default App;
