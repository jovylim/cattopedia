import React from "react";

const RandomCatPic = (props) => {
  return (
    <>
      <img src={props.data[0].url}></img>
    </>
  );
};

export default RandomCatPic;
