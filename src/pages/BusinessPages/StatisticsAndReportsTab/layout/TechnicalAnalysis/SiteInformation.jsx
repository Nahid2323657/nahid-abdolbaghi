import React, { useState } from "react";
import { ImageContainer } from "../../../../../assets/img/IMG";

export default function Index({content}) {
    const [toggleShowMoreInfo, setToggleShowMoreInfo] = useState(false);

    return(
        <>
        <div className="flex justify-between pt-5 px-5">
          <div className="flex justify-start items-center w-2/6 h-full">
            <img
              src={ImageContainer.directionOfTheGreenValue}
              alt="green arrow"
              className=" w-6 h-6 rotate-180"
            />
            <span className=" text-[#063468] text-sm pr-5">
              {content.label}
            </span>
          </div>
          <div className=" flex-col w-3/6">
            <p className=" text-sm text-gray text-right">
              {content.value}
            </p>
            <p className=" text-right mt-3">
              طول :<span className="text-gray text-sm pr-1"> {content.length} حرف </span>
            </p>
          </div>
          <div className="flex justify-end items-center w-1/6">
            <img
              src={ImageContainer.moveDownArrow}
              alt="arrow"
              onClick={() => setToggleShowMoreInfo(!toggleShowMoreInfo)}
              className={` w-6 h-24 py-2 px-1 mb-2 cursor-pointer ${
                !toggleShowMoreInfo && "rotate-180"
              }  transition-all`}
            />
          </div>
        </div>
        {toggleShowMoreInfo && (
          <div>
            <p className="text-lg text-gray px-8 bg-white text-right py-4 m-5">
              {content.description}
            </p>
          </div>
        )}
        <div className="border-border border w-full mx-3" ></div>
        </>
    );
}