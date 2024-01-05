import React from "react";
import StripeCheckout from "react-stripe-checkout"; // Make sure you have installed this package

export const PaymentPage = () => {
  const onToken = (token) => {
    console.log(token);
    // You can handle the token data or send it to your server for further processing
  };

  // Information from your API response
  const coinName = "USDT";
  const walletAddress = "TC95cxw2A8NdaMnGmnzhApavbDh6T3U9Sc";

  return (
    <div className="mx-80 my-8  ">
      <div className="flex  ">
        <h2>{`Payment for ${coinName}`}</h2>
        {/* <p>{`Send your payment to the following wallet address: ${walletAddress}`}</p> */}
      </div>

      <StripeCheckout
        token={onToken}
        stripeKey="my_PUBLISHABLE_stripekey"
        name={coinName}
        description={`Payment for ${coinName}`}
      />
    </div>
  );
};
