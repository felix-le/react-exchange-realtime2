import React from "react";

export const Button = (props) => {
  return (
    <>
      <button className={`btn ${props.btnType}`} onClick={props.handleOnClick}>
        {props.btnName ? props.btnName : <span className="swap">⇅</span>}
      </button>
    </>
  );
};
