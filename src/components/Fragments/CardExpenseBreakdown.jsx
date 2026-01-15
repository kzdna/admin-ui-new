import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

function CardExpenseBreakdown(props) {
  const { data } = props;

  const renderIcon = () => {
    if (data?.icon) {
      return <div className="text-gray-500">{data.icon}</div>;
    }
    return <div className="text-gray-500"><Icon.Shopping /></div>;
  };

  return (
    <Card
      desc={
        <div className="h-full">
          <div className="bg-[#F3F4F6] p-4 -mx-6 -mt-6 mb-4 rounded-t-xl border-b border-gray-200"> 
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center">
                <div className="bg-[#D1D5DB] w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
                  {renderIcon()}
                </div>  
                <div className="ms-4">
                  <p className="text-gray-02 text-[11px] mb-0.5 font-bold">{data?.category}</p>
                  <p className="font-bold text-xl leading-none text-gray-800">${data?.amount}</p>
                </div>
              </div>
              <div className="text-right">
                 <div className="flex items-center justify-end font-bold text-sm text-gray-800">
                    {data?.percentage}% 
                    <span className="ms-1">
                      {typeof data?.arrow === "object" ? data.arrow : (data?.arrow === 'up' ? '↑' : '↓')}
                    </span>
                 </div>
                 <p className="text-gray-500 text-[10px]">Compare to last month</p>
              </div>
            </div>
          </div>

          <div className="space-y-0 px-1">
            {data?.details?.length > 0 ? (
              data.details.map((detail, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-4 border-t-2 border-gray-200 first:border-t-0"
                >
                  <div>
                    <p className="font-semibold text-[14px] text-gray-02">{detail.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[14px] text-gray-02">${detail.amount}</p>
                    <p className="text-gray-03 text-[11px] mt-1">{detail.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-03 text-xs italic text-center py-4">
                No recent transactions
              </div>
            )}
          </div>
        </div>
      }
    />
  );
}

export default CardExpenseBreakdown;