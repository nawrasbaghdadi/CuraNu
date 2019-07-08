import React from "react";
import "./styles/App.scss";
import HeaderComponent from "./components/HeaderComponent";
import AccordionContainer from "./components/AccordionContainer";
import data from "./data/Accordion.json";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="page__container container">
        <AccordionContainer data={data} firstOpen={false} keepOpen={true} />
      </div>
    </div>
  );
}

export default App;
