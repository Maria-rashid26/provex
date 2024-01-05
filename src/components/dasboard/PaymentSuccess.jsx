import React from "react";
import Pricing from "../Pricing";

const data = [
  {
    id: "01 Basic",
    coin_name: "USDT",
    qr_code: "/media/usdt_erc20_qrcodes/USDT_ERC20.jpg",
    wallet_address: "0x774170b57c2d6fdecafcb764eb0a20991de7a592",
    network: "ERC20",
    description: "payment Successful",
  },
  {
    id: "02 Standard",
    coin_name: "USDT",
    qr_code: "/media/usdt_trc20_qrcodes/USDT_TRC20.jpg",
    wallet_address: "TC95cxw2A8NdaMnGmnzhApavbDh6T3U9Sc",
    network: "TRC20",
    description: "payment Successful",
  },
  {
    id: "03 Classic ",
    coin_name: "BTC",
    qr_code: "/media/btc_qrcodes/BTC.jpg",
    wallet_address: "1BpficV3JWS2GihJApiQXfgxZqZPHBUwJY",
    network: "BTC",
    description: "payment Successful",
  },
  {
    id: "04 Premium ",
    coin_name: "BTC",
    qr_code: "/media/btc_qrcodes/BTC.jpg",
    wallet_address: "1BpficV3JWS2GihJApiQXfgxZqZPHBUwJY",
    network: "BTC",
    description: "payment Successful",
  },
];

const PaymentSuccess = () => {
  // //   const [isGoBack, setGoBack] = useState(false);

  // //   const handleGoBackClick = () => {
  // //     setGoBack(true);
  // //   };

  //   if (isGoBack) {
  //     // Render PaymentSuccess component when paymentSuccess state is true
  //     return <Pricing />;
  //   }
  return (
    <div className="container mt-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-2 grid-cols-1 sm:gap-4 gap-3">
        {data.map((item) => (
          <div className="text-center uppercase " key={item.id}>
            <div className="card bg-primary text-secondary leading-[2rem]">
              <h3 className="bg-secondary text-primary font-bold text-[1.5rem] h-[40px]">
                {item.id}
              </h3>
              <p className="font-bold mt-9 text-[1.3rem] text-white">
                {item.coin_name}
              </p>

              <p className="text-[1.1rem] leading-10 ">{item.network}</p>

              <p className="font-bold text-[1.1rem] leading-10 ">
                {item.description}
              </p>
              <button className="bg-secondary w-full p-4 text-primary">
                Go Back
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSuccess;
