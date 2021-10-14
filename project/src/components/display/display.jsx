import React from 'react';

function Display({counter, decrement, onChange}) {
  return(
    <div>
      <button className="calc__minus" onClick={decrement}></button>
      <input className="calc__input calc__input-score" 
        type="text"
        id="sum"
        pattern="[0-9]{5,10}"
        value={counter}
        onChange={evt => onChange(evt.target.value)}
      />
      <button className="calc__plus">+</button>
    </div>
  );
}

export default Display;