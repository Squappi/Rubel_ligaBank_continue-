import React from "react";

function Credits() {
  return(
    <>
    <div className="information__wrapper">
      <div className="information__case">
        <div className="information__centering">
          <h2 className="information__header">Лига Банк выдает кредиты под любые цели</h2>
          <ul className="information__list">
            <li className="information__item">Ипотечный кредит</li>
            <li className="information__item">Автокредит</li>
            <li className="information__item">Потребительский кредит</li>
          </ul>
          <p className="information__text">Рассчитайте ежемесячный платеж
            и ставку по кредиту воспользовавшись нашим <a>кредитным калькулятором</a>
          </p>
        </div>
        <div className="information__image-wrapper">
          <img src="./image/car-money.png" alt="картинка" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Credits;