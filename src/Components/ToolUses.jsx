import React from "react";
import GraphImg1 from "/GraphImg1.png";
import GraphImg2 from "/GraphImg2.png";
import PercentageImg from "/PercentageImg.png";

const ToolUses = () => {
  return (
    <div className="pt-3 pb-8">
      <h1 className="p-3 text-white text-3xl font-semibold text-center">
        Price comparison - Core use cases
      </h1>
      <div className="flex flex-wrap text-center justify-center">
        <div className="bg-white rounded-xl mx-3 my-3 shadow-2xl w-[30%]">
          <img src={GraphImg1} alt="Graph Image" />
          <h2 className="text-2xl font-bold">Price comparison</h2>
          <div className="text-xl m-3 p-3 rounded-xl bg-lime-100">
            Know your competitors’ prices and their relation to yours.
          </div>
        </div>
        <div className="bg-white rounded-xl my-3 shadow-2xl w-[30%]">
          <img src={GraphImg2} alt="Graph Image" />
          <h2 className="text-2xl font-bold">Discovering trends</h2>
          <div className="text-xl m-3 p-3 rounded-xl bg-lime-100">
            Time-stamp price changes and identify the source of price-drop chain
            reactions.
          </div>
        </div>
        <div className="bg-white rounded-xl mx-3 my-3 shadow-2xl w-[30%]">
          <img src={PercentageImg} alt="Percentage Image" />
          <h2 className="text-2xl font-bold">Seizing opportunities</h2>
          <div className="text-xl m-3 p-3 rounded-xl bg-lime-100">
            Always be aware of good promotion opportunities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolUses;
