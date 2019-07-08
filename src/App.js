import React from "react";

import "./styles/App.scss";
import HeaderComponent from "./components/HeaderComponent";
import AccordionContainer from "./components/AccordionContainer";
import data from "./data/Accordion.json";
import DirectNaar from "./components/Box/DirectNaar";
import TelefoonBoek from "./components/Box/TelefoonBoek.js";
import Evenementen from "./components/Box/Evenementen";
import Blogs from "./components/Box/Blogs";
import MicroBlog from "./components/Box/MicroBlog";
import Nieuws from "./components/Box/Nieuws";
import Kwaliteitshandboek from "./components/Box/Kwaliteitshandboek";
import Peilingen from "./components/Box/Peilingen";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="page__container container">
        <AccordionContainer data={data} firstOpen={false} keepOpen={true} />
        <DirectNaar title="Direct naar" footer={false} />
        <TelefoonBoek title="TELEFOONBOEK" footer={false} />
        <Evenementen title="Evenementen" footer={true} />
        <Blogs title="Blogs" footer={true} />
        <MicroBlog title="MICROBLOG" footer={true} />
        <Nieuws title="Nieuws" footer={true} />
        <Kwaliteitshandboek title="Kwaliteitshandboek" footer={true} />
        <Peilingen title="Peilingen" footer={false} />
      </div>
    </div>
  );
}

export default App;
