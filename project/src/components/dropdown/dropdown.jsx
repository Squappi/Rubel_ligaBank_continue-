import React, { useState } from "react";

function Dropdown({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Ипотечное кредитование', 'Автомобильное кредитование']
  return(
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <span className="dropdown__icon">
            <img src="./image/arrow.svg"/>
          </span>
        </div>
        {isActive && (
          <div className="dropdown-content">
          {options.map((option, index) => (
            <div key={index} className="dropdown-item" 
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
              }}
            >
              {option}
            </div>
          ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;