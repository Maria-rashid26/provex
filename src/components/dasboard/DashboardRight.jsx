import React, { useState } from "react";
import { LogInPage } from "../../pages/LogInPage";
import DashboardLeft from "./DashboardLeft";
import { Profilee } from "./Profilee";
import { PaymentPage } from "./PaymentPage";
import { Transaction } from "./Transaction";

const AnotherDashboard = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [isPaymentVisible, setPaymentVisible] = useState(false);
  const [isTransactionVisible, setTransactionVisible] = useState(false);

  const handleLoginFormSubmit = () => {
    setLoginFormVisible(false);
  };
  const handleProfileClick = () => {
    setPaymentVisible(false);
    setTransactionVisible(false);
    setDashboardVisible(false);
  };

  const handlePaymentClick = () => {
    setPaymentVisible(true);

    setTransactionVisible(false);
    setDashboardVisible(false);
  };

  const handleTransactionClick = () => {
    setTransactionVisible(true);
    setPaymentVisible(false);

    setDashboardVisible(false);
  };
  const handleDashboardClick = () => {
    setTransactionVisible(false);
    setPaymentVisible(false);

    setDashboardVisible(true);
  };

  return (
    <div
      className={`pt-20 h-screen  ${
        isLoginFormVisible ? "background-hidden" : ""
      }`}
    >
      {isLoginFormVisible ? (
        <LogInPage onSubmit={handleLoginFormSubmit} />
      ) : (
        <div className="flex ">
          <DashboardLeft
            onPaymentClick={handlePaymentClick}
            onTransactionClick={handleTransactionClick}
            onDashboardClick={handleDashboardClick}
          />

          <div> {isPaymentVisible && <PaymentPage />}</div>
          <div> {isTransactionVisible && <Transaction />}</div>
        </div>
      )}
    </div>
  );
};

export default AnotherDashboard;
