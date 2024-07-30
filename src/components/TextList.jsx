import React, { useState, useEffect } from "react";

export default function TextList({ textList }) {
  return (
    <div>
      {textList.map((i, idx) => {
        console.log(i);
        return <p>{i}</p>;
      })}
    </div>
  );
}
