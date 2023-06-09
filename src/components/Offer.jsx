import React from "react";

const Offer = ({ src, link, index }) => {
  return (
    <>
      <a href={link}></a> <img src={src} alt={`${index} offer`}></img>
    </>
  );
};

export default Offer;
