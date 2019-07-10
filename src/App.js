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
  <AccordionContainer
    data={data}
    firstOpen={true}
    keepOpen={true}
    key="compo-1"
  />,
  <DirectNaar title="Direct naar" footer={false} key="compo-2" />,
  <TelefoonBoek title="TELEFOONBOEK" footer={false} key="compo-3" />,
  <Evenementen title="Evenementen" footer={true} key="compo-4" />,
  <Blogs title="Blogs" footer={true} key="compo-5" />,
  <MicroBlog title="MICROBLOG" footer={true} key="compo-6" />,
  <Nieuws title="Nieuws" footer={true} key="compo-7" />,
  <Kwaliteitshandboek title="Kwaliteitshandboek" footer={true} key="compo-8" />,
  <MijnGroepen title="MijnGroepen" footer={true} key="compo-9" />,
  <MijnLinks title="Mijn links" footer={false} key="compo-10" />,
  <Peilingen title="Peilingen" footer={false} key="compo-11" />,
  <Toevoegen more="Mijn links" key="compo-12" />
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
