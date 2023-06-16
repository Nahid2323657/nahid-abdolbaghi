/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MultiProgress from "react-multi-progress";
import { ImageContainer } from "../../../../../assets/img/IMG";
import { sampleChartColors } from "../../../../baghShahiRanck/configs/sampleChartData";
import { companyDetails, companyDetails2 } from "../../../../../constants/NavItemsConstants";

export default function index() {
  return (
    <div className="">
      <div className=" grid grid-cols-2 gap-y-7 gap-x-10 mx-5">
        {companyDetails.map((item) => (
          <div className=" inline-block text-right w-full bg-white pt-2 pb-5 px-5 rounded-lg">
            <div className=" flex justify-between items-center">
              <div className="flex justify-center items-center">
                <img src={item.icon} alt="ico" />
                <span className=" mr-2">{item.titel}</span>
              </div>
              <span className="bg-sectionDisable text-orgWhite  rounded-xl px-4">
                {item.number} مورد
              </span>
            </div>
            <div className=" mt-7">
              <MultiProgress
                transitionTime={1.2}
                height="10px"
                elements={[
                  {
                    value: 35,
                    color: "#D9D9D9",
                    showPercentage: false,
                    fontSize: 9,
                    textColor: "black",
                    isBold: false,
                  },
                  {
                    actual: 65,
                    value: 65,
                    color: `${item.progressColor}`,
                    showPercentage: false,
                    fontSize: 9,
                    isBold: false,
                  },
                ]}
                component={({ children, element, ...rest }) => {
                  return (
                    <>
                      <div
                        {...rest} // adds all styles for rendering the progress bar
                        style={{
                          fontWeight: element.isBold ? 900 : 300,
                        }}>
                        {children}
                        <div className="text-xs">
                          <span className="ml-3 text-s absolute text-gold left-0 -top-6">
                            {element?.actual}
                          </span>
                          <i
                            className={` inline-block ${
                              element.color === sampleChartColors.failure
                                ? "borderBT--red triangle-down"
                                : element.color === sampleChartColors.success
                                ? "triangle-up"
                                : "dot"
                            }`}></i>
                        </div>
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-around items-center flex-row-reverse rounded-lg py-1 bg-white mx-5 mt-5">
      {companyDetails2.map((item) => (
        <div className="flex justify-center items-center">
          <img src={item.img} className="bg-sectionDisable rounded p-3"/>
          <span className=" text-title text-sm pr-4">{item.title}</span>
        </div>))}
      </div>
      <div className="px-5 w-full">
      <hr className="w-full border-border mt-8" />
      </div>
    </div>
  );
}
