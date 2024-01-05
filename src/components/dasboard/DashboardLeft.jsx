import React from "react";

const DashboardLeft = ({
  onPaymentClick,
  onTransactionClick,
  onDashboardClick,
}) => {
  return (
    <div className="w-[20%] bg-teal-800  h-screen space-y-5 pt-6 mx-2 rounded-md">
      <button
        onClick={onDashboardClick}
        className=" bg-white/80 w-[230px] mx-4 rounded-sm h-[37px] text-teal-950  font-semibold"
      >
        Dashboard
      </button>

      <button
        onClick={onPaymentClick}
        className=" bg-white/80 w-[230px] mx-4 rounded-sm h-[37px] text-teal-950  font-semibold"
      >
        Payment
      </button>
      <button
        onClick={onTransactionClick}
        className=" bg-white/80 w-[230px] mx-4 rounded-sm h-[37px] text-teal-950  font-semibold"
      >
        Transaction
      </button>
    </div>
  );
};

export default DashboardLeft;
