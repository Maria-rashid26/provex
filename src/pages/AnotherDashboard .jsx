import React, { useState } from "react";
import { LogInPage } from "./LogInPage";
import DashboardLeft from "../components/dasboard/DashboardLeft";
import { PaymentPage } from "../components/dasboard/PaymentPage";
import { Transaction } from "../components/dasboard/Transaction";
import SecondDashboard from "./dashboard/SecondDashboard";

const AnotherDashboard = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [isPaymentVisible, setPaymentVisible] = useState(false);
  const [isTransactionVisible, setTransactionVisible] = useState(false);
  const [isDashboardVisible, setDashboardVisible] = useState(false);

  const handleLoginFormSubmit = () => {
    setLoginFormVisible(false);
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
      className={`pt-20 h-screen ${
        isLoginFormVisible ? "background-hidden" : ""
      }`}
    >
      {isLoginFormVisible ? (
        <LogInPage onSubmit={handleLoginFormSubmit} />
      ) : (
        <div className="flex">
          <DashboardLeft
            onPaymentClick={handlePaymentClick}
            onTransactionClick={handleTransactionClick}
            onDashboardClick={handleDashboardClick}
          />
          <div>
            {!isPaymentVisible && !isTransactionVisible && <SecondDashboard />}
            {isPaymentVisible && <PaymentPage />}
            {isTransactionVisible && <Transaction />}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnotherDashboard;
