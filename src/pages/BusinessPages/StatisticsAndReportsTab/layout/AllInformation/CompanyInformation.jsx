import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function index() {
  const miniChartSetting2 = {
    datasets: [
      {
        label: "# of Votes",
        data: [10, 90],
        cutout: 60,
        backgroundColor: ["rgba(255, 255, 255, 0.2)", "#10CCAE"],
        borderWidth: 0,
        borderRadius: 5,

      },
    ],
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = 'bolder 36px sans-serif';
      ctx.fillStyle = '#10CCAE';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(miniChartSetting2.datasets[0].data[1], chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
    
    }
  }
  console.log({textCenter})
  return (
    <div className="flex justify-between h-40">
       <div className="h-full flex flex-col relative">
      <div className="w-40"> 
        <Doughnut
          data={miniChartSetting2}
          options={{ maintainAspectRatio: false }}
          plugins={[textCenter]}
        />
      </div>
      <div className="relative" style={{bottom:139,minHeight:138,width:140,backgroundColor:'rgba(16, 204, 174, 0.2)',right:10, borderRadius:100}}></div>
      </div>
      <div className="h-full flex flex-col justify-between items-start mx-4 pr-2">

      <p className=" text-lg text-title">شرکت زانکو نویان Xaankoo Noyan</p>
      <p className="text-gray text-sm text-right">
        شرکت زانکو نویان Xaankoo Noyan - ارائه محصولات نوآور برای افزایش
        بهره‌وری شرکت‌ها، کارکنان و تیم‌ها
      </p>
      <a href="https://xaankoo.com/" className="text-primary text-lg">
        https://xaankoo.com/
      </a>
      </div>
      {/* <RotateLine/> */}
      <div className=" border border-border h-full mx-1"></div>
      <div className=" flex-grow h-full border border-border mx-4 ">

      </div>
    </div>
  );
}
