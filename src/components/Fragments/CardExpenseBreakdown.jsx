import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

function CardExpenseBreakdown(props) {
  const { data } = props;

  const renderIcon = () => {
    if (data?.icon) {
      return data.icon;
    }
    return Icon && Icon.Shopping ? <Icon.Shopping /> : <div className="w-5 h-5 bg-gray-300 rounded-full" />;
  };

  return (
    <Card
      title={data?.category || "Expense"}
      desc={
        <div className="h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="flex">
              <div className="bg-special-bg text-gray-02 px-3 py-3 rounded-lg flex items-center justify-center">
                {renderIcon()}
              </div>
              <div className="ms-4">
                <p className="text-gray-02 text-xs mb-1">{data?.category}</p>
                <p className="font-bold text-lg leading-none">${data?.amount}</p>
              </div>
            </div>
            <div className="text-right">
               <div className="flex items-center justify-end font-bold text-sm">
                  {data?.percentage}% 
                  <span className="ms-1">
                    {typeof data?.arrow === "object" ? data.arrow : (data?.arrow === 'up' ? '↑' : '↓')}
                  </span>
               </div>
               <p className="text-gray-03 text-[10px]">Compare to last month</p>
            </div>
          </div>

          <div className="border-b border-gray-05 mb-4"></div>

          <div className="space-y-4">
            {data?.details?.length > 0 ? (
              data.details.map((detail, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm">{detail.name}</p>
                    <p className="text-gray-03 text-[10px]">{detail.date}</p>
                  </div>
                  <p className="font-bold text-sm">${detail.amount}</p>
                </div>
              ))
            ) : (
              <div className="text-gray-03 text-xs italic text-center py-2">
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