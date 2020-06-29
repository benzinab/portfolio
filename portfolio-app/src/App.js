import React from "react";
import logo from "./logo.svg";
import "./scss/App.css";
import {useState } from 'react';
import {aboutMe} from "./components/AboutMe";
import {contact} from "./components/Contact";
import {projects} from "./components/Projects";
import {header} from "./components/Header";
import {footer} from "./components/Footer";

function App() {
  let components = {
    about: aboutMe(),
    projects: projects(),
    contact: contact(),
};
  const [tab, setTab] = useState('about');

  return <div className="App">
    {header(setTab)}
    <div className="body">
      {components[tab]}
    </div>
    {footer()}
  </div>;
}

export default App;
