import React from "react";

function Service() {
  return(
    <>
    <div className="information__wrapper">
      <div className="information__case">
        <div className="information__centering">
          <h2 className="information__header">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h2>
          <ul className="information__list">
            <li className="information__item">Мобильный банк, который всегда под рукой</li>
            <li className="information__item">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
          </ul>
          <button className="information__button">Узнать подробнее</button>
        </div>
        <div className="information__image-wrapper">
          <img src="./image/phone-image.png" alt="картинка"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Service;