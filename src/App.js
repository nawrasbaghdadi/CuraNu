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
import MijnGroepen from "./components/Box/MijnGroepen";
import MijnLinks from "./components/Box/MijnLinks";
import Toevoegen from "./components/Box/Toevoegen";
import LayoutComponent from "./components/LayoutComponent";
const componentsArray = [
  <AccordionContainer data={data} firstOpen={true} keepOpen={true} />,
  <DirectNaar title="Direct naar" footer={false} />,
  <TelefoonBoek title="TELEFOONBOEK" footer={false} />,
  <Evenementen title="Evenementen" footer={true} />,
  <Blogs title="Blogs" footer={true} />,
  <MicroBlog title="MICROBLOG" footer={true} />,
  <Nieuws title="Nieuws" footer={true} />,
  <Kwaliteitshandboek title="Kwaliteitshandboek" footer={true} />,
  <MijnGroepen title="MijnGroepen" footer={true} />,
  <MijnLinks title="Mijn links" footer={false} />,
  <Peilingen title="Peilingen" footer={false} />,
  <Toevoegen more="Mijn links" />
];

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <LayoutComponent columns={3}>
        {componentsArray.map(ele => {
          return ele;
        })}
      </LayoutComponent>
    </div>
  );
}

export default App;
