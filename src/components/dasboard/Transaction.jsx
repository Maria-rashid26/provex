import React, { useState } from "react";

import Chart from "react-apexcharts";

export const Transaction = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <div className="space-y-9 mx-48 pt-6">
      <h2 className="font-bold underline text-2xl text-center">
        Transaction Chart
      </h2>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
      />
    </div>
  );
};
