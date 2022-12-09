import React from "react";
import Card from "./Card";
import contact from "../Components/contact";
function App() {
  return (
    <div className="App">
    <h1 className="heading">My Contacts</h1>
       <Card 
        name = {contact[0].name}
        img = {contact[0].img}
        mail = {contact[0].mail}
        num = {contact[0].num}
       />
       <Card 
        name = {contact[1].name}
        img = {contact[1].img}
        mail = {contact[1].mail}
        num = {contact[1].num}
       /><Card 
        name = {contact[2].name}
        img = {contact[2].img}
        mail = {contact[2].mail}
        num = {contact[2].num}
       />
    </div>
  );
}

export default App;
