import React from "react";
import "./text-area.scss";

interface textAreaProps {
  placeHolder: string;
}

export const TextArea: React.FC<textAreaProps> = (props) => {
  return (
    <textarea className="text-area" placeholder={props.placeHolder}></textarea>
  );
};

export default TextArea;
