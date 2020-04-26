import React from "react";
import RegionList from "./components/RegionList";
import RegionDetail from "./components/RegionDetail";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <div className="main-left">
          <RegionList />
        </div>
        <div className="main-right">
          <RegionDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
