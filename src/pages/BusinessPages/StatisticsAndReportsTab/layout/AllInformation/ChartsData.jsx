import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chartsData } from "../../../../../constants/NavItemsConstants";

export default function index() {

  console.log(chartsData[2]?.text)
  return (
    <div className="w-full flex justify-around flex-row-reverse items-center ">
        {chartsData.map((item) => (
          <div>
        <div className="w-40">
          <Doughnut
            data={item.data}
            options={{ maintainAspectRatio: false }}
            // plugins={[item.text]}
          />
        </div>
        <p className="m-auto mt-7 text-title text-lg">{item.titel}</p>
        <div className="relative" style={{bottom:195,minHeight:138,width:140,backgroundColor:item.backgroundColor,right:10, borderRadius:100}}></div>
        </div>))}
    </div>
  );
}
