import React, { useState } from "react";

export default function TextBox({ textList, setTextList }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    // e: event
    //console.log(e.target.value)
    setText(e.target.value);
  };

  const handleOnClick = () => {
    // console.log("submit text: ", text);
    // textlist에 text를 추가한다.
    setTextList([...textList, text]);
    // text를 초기화한다.
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>submit</button>
    </div>
  );
}
