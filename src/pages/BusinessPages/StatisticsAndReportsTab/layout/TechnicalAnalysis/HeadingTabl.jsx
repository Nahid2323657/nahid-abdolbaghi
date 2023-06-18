import React, { useState } from "react";
import { ImageContainer } from "../../../../../assets/img/IMG";

export default function Index({ content }) {
  const [toggleShowMoreInfoH1, setToggleShowMoreInfoH1] = useState(false);
  const [toggleShowMoreInfoH2, setToggleShowMoreInfoH2] = useState(false);
  const [toggleShowMoreInfoH3, setToggleShowMoreInfoH3] = useState(false);
  const [toggleShowMoreInfoH4, setToggleShowMoreInfoH4] = useState(false);
console.log({content})
  return (
    <div className="flex flex-col border border-border rounded-none overflow-hidden transition-all my-5">
      <div className="flex justify-between pt-4 px-4">
        <div>h1</div>
        <div className="flex justify-end items-center w-2/6 h-full">
            <span className="bg-sectionDisable text-orgWhite  rounded-xl px-4 mx-3">9 مورد</span>
            <img
              src={ImageContainer.moveDownArrow}
              width={14}
              height={14}
              alt="arrow"
              onClick={() => setToggleShowMoreInfoH1(!toggleShowMoreInfoH1)}
              className={` cursor-pointer ${
             !toggleShowMoreInfoH1 && "rotate-180"
            }  transition-all`}
            />
        </div>
      </div>
      {toggleShowMoreInfoH1 && (
        <div>
          <p className="text-sm text-gray px-8 text-right py-4 m-5">
            {content.value.h1}
          </p>
        </div>
      )}
      <div className="w-full border border-border mt-3"></div>
      <div className="flex justify-between pt-4 px-4">
        <div>h2</div>
        <div className="flex justify-end items-center w-2/6 h-full">
            <span className="bg-sectionDisable text-orgWhite  rounded-xl px-4 mx-3">9 مورد</span>
            <img
              src={ImageContainer.moveDownArrow}
              width={14}
              height={14}
              alt="arrow"
              onClick={() => setToggleShowMoreInfoH2(!toggleShowMoreInfoH2)}
              className={` cursor-pointer ${
             !toggleShowMoreInfoH2 && "rotate-180"
            }  transition-all`}
            />
        </div>
      </div>
      {toggleShowMoreInfoH2 && (
        <div>
          <p className="text-sm text-gray px-8 text-right py-4 m-5">
            {content.value.h2}
          </p>
        </div>
      )}
      <div className="w-full border border-border mt-3"></div>
      <div className="flex justify-between pt-4 px-4">
        <div>h3</div>
        <div className="flex justify-end items-center w-2/6 h-full">
            <span className="bg-sectionDisable text-orgWhite  rounded-xl px-4 mx-3">9 مورد</span>
            <img
              src={ImageContainer.moveDownArrow}
              width={14}
              height={14}
              alt="arrow"
              onClick={() => setToggleShowMoreInfoH3(!toggleShowMoreInfoH3)}
              className={` cursor-pointer ${
             !toggleShowMoreInfoH3 && "rotate-180"
            }  transition-all`}
            />
        </div>
      </div>
      {toggleShowMoreInfoH3 && (
        <div>
          <p className="text-sm text-gray px-8 text-right py-4 m-5">
            {content.value.h3}
          </p>
        </div>
      )}
      <div className="w-full border border-border mt-3"></div>
      <div className="flex justify-between pt-4 px-4">
        <div>h4</div>
        <div className="flex justify-end items-center w-2/6 h-full mb-4">
            <span className="bg-sectionDisable text-orgWhite  rounded-xl px-4 mx-3">9 مورد</span>
            <img
              src={ImageContainer.moveDownArrow}
              width={14}
              height={14}
              alt="arrow"
              onClick={() => setToggleShowMoreInfoH4(!toggleShowMoreInfoH4)}
              className={` cursor-pointer ${
             !toggleShowMoreInfoH4 && "rotate-180"
            }  transition-all`}
            />
        </div>
      </div>
      {toggleShowMoreInfoH4 && (
        <div>
          <p className="text-sm text-gray px-8 text-right py-5 m-5">
            {content.value.h4}
          </p>
        </div>
      )}
    </div>
  );
}
