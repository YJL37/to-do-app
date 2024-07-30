import logo from "./logo.svg";
import "./App.css";
import TextBox from "./components/TextBox";
import TextList from "./components/TextList";
import { useState } from "react";

function App() {
  const [textList, setTextList] = useState([]);

  return (
    <div>
      <TextBox textList = {textList} setTextList = {setTextList} />
      <TextList textList = {textList} />
    </div>
  );
}

export default App;
