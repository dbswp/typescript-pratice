import React from "react";
import "./App.css";
import JoinBtn from "./components/JoinBtn";
// import TestHeader from "./components/TestHeader";

function App() {
  return (
    <div className="App">
      {/* <TestHeader isLogin={true} userID="윤제" /> */}
      <JoinBtn age={16} />
    </div>
  );
}

export default App;
