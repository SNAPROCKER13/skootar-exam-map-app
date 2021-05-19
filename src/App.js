import "./App.css";
import "antd/dist/antd.css";
import Price from "./pages/Price";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapTest from "./pages/MapTest";
import {useState} from "react"

function App() {
  const [markers, setMarkers] = useState([]);
  return (
    <MapTest/>  
  );
}
export default App;
