import React from "react";

function Deposits() {
  return(
    <>
    <div className="information__wrapper">
      <div className="information__case">
        <div className="information__centering">
          <h2 className="information__header">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h2>
          <ul className="information__list">
            <li className="information__item">Проценты по вкладам до 7%</li>
            <li className="information__item">Разнообразные условия</li>
            <li className="information__item">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
          </ul>
          <button className="information__button">Узнать подробнее</button>
        </div>
        <div className="information__image-wrapper">
          <img src="./image/piggybank.png" alt="картинка" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Deposits;