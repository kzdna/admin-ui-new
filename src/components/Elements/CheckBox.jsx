import React from "react";

function CheckBox(props) {
  const { label, id, ...rest } = props;
    return (
        <div className="flex items-center">
            <input
                type="checkbox" 
                className="w-4 h-4 text-primary bg-transparent border-gray-03 rounded focus:ring-primary focus:ring-2"
                id={id}
                {...rest}
            />
            
            <label 
              htmlFor={id}
              className="text-sm text-gray-01 ml-3" 
            >
               {label}
            </label>
        </div>
    );
}

export default CheckBox;