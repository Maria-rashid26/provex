import React, { useState } from "react";
import PaymentSuccess from "./dasboard/PaymentSuccess";
import { prices } from "../utils/constants";

const Pricing = ({}) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleBuyNowClick = () => {
    setPaymentSuccess(true);
  };

  if (paymentSuccess) {
    // Render PaymentSuccess component when paymentSuccess state is true
    return <PaymentSuccess />;
  }

  return (
    <div className="container mt-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-2 grid-cols-1 sm:gap-4 gap-3">
        {prices.map((price) => {
          const { number, type, initial, final, desc, duration, roi } = price;
          return (
            <div className="text-center uppercase" key={number}>
              <div className="">
                <div className="card bg-primary text-secondary leading-[2rem]">
                  <h3 className="bg-secondary text-primary font-bold text-[1.5rem]">
                    0{number} <br /> {type}
                  </h3>
                  <p className="font-bold mt-9 text-[1.3rem] text-white">
                    &euro;{initial} - &euro;{final}{" "}
                  </p>
                  <p className="font-bold text-[1.1rem] leading-10 ">{roi}</p>
                  <p className="">{desc}</p>
                  <p className="text-[1.1rem] leading-10 ">
                    Duration:{duration}
                  </p>
                  <button
                    className="bg-secondary w-full p-4 text-primary"
                    onClick={handleBuyNowClick}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
