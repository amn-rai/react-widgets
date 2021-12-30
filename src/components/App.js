import React from "react";
// import Accordion from "./Accordion";
import Search from './Search'
const App = () => {
  const List = [
    {
      title: "Where John Doe live?",
      content: "India",
    },
    {
      title: "Where Huvana live?",
      content: "China",
    },
    {
      title: "Where Aman live?",
      content: "Pakistan",
    },
    {
      title: "Where Justin live?",
      content: "London",
    },
  ];
  return (
    <div style={{marginTop:'80px',textAlign:'center'}}>
      {/* <Accordion list={List} /> */}
    <Search/>
    </div>
  );
};

export default App;
