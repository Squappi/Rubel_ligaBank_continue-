import React from "react";

function Insurance() {
  return(
    <>
    <div className="information__wrapper">
      <div className="information__case">
        <div className="information__centering">
          <h2 className="information__header">Лига Страхование — застрахуем все что захотите</h2>
          <ul className="information__list">
            <li className="information__item">Автомобильное страхование</li>
            <li className="information__item">Страхование жизни и здоровья</li>
            <li className="information__item">Страхование недвижимости</li>
          </ul>
          <button className="information__button">Узнать подробнее</button>
        </div>
        <div className="information__image-wrapper">
          <img src="./image/block.png" alt="картинка" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Insurance;