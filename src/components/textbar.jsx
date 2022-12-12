import React, { useState } from "react";
import "./textbar.css";
import { Input, Button } from "antd";
import alert from "./alert";

const { TextArea } = Input;
const App = (props) => {
  const [text, setText] = useState("");
  function capital() {
    setText(text.toUpperCase());
    props.showAlert("success" , "Text has been converted to upperCase");
  }
  function small() {
    setText(text.toLowerCase());
    props.showAlert("success" , "Text has been converted lowerCase");
  }
  function clearText() {
    setText("");
    props.showAlert("success" , "Text has been cleared");
  }
  function copyText() {
    let textCopy = document.getElementById("myInput");
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value);
    props.showAlert("success" , "Text has been copy to clipboard");

  }
  function changing(e) {
    setText(e.target.value);
  }
  return (
    <div className="main">
      <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>Enter the text to anaylize below</h1>
      <TextArea
      className={`bg-${props.mode} text-${props.mode === "light"?"dark":"light"}`}
      id="myInput"
        onChange={changing}
        rows={5}
        value={text}
        placeholder="enter text"
      />
      <Button onClick={capital} style={{ marginTop: "1rem" }} type="primary">
        UpperCase
      </Button>
      <Button onClick={small} style={{ marginTop: "1rem" , marginLeft:"0.5rem" }} type="primary">
        LowerCase
      </Button>
      <Button onClick={clearText} style={{ marginTop: "1rem" , marginLeft:"0.5rem" }} type="primary">
        ClearText
      </Button>
      <Button onClick={copyText} style={{ marginTop: "1rem" , marginLeft:"0.5rem" }} type="primary">
        CopyText
      </Button>
      <div className={`text-${props.mode==="light"?"dark":"light"}`}>
        <h1 className="fs-2 mt-5">Your Text Summary</h1>
      <p className="mt-1">Total Alphabets =  {text.length}</p>
      <p>Total words = {text.split(" ").length}</p>
      </div>
    </div>
  );
};
export default App;
