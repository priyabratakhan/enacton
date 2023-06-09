import React from "react";
import Offer from "./Offer";
import "../styles/offers.css"

const Offers = ({ offer }) => {
  console.log(offer);
  return (
    <div className="offersSection">
      {offer.map((item, index) => (
        <Offer key={iemm.image} index={index} src={item.url}></Offer>
      ))}
    </div>
  );
};

export default Offers;
