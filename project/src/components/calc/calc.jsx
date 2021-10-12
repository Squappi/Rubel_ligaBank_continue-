import React, { useState } from 'react';
import Dropdown from '../dropdown/dropdown';

function Calc() {
  const [selected, setSelected] = useState("");

  return(
    <>
      <section className="calc">
        <div className="calc__container">
          <div className="calc__case">
            <h2 className="calc__header">Кредитный калькулятор</h2>
            <div className="calc__wrapper">
              <h3 className="calc__step">Шаг 1. Цель кредита</h3>
              <Dropdown selected={selected} setSelected={setSelected}/>

              <h3 className="calc__step">Шаг 2. Введите параметры кредита</h3>
              <label className="calc__label">Стоимость недвижимости</label>
              <button className="calc__minus"></button>
              <input className="calc__input" type="text" id="sum"/>
              <button className="calc__plus"></button>
              <p className="calc__text">От 1 200 000  до 25 000 000 рублей</p>
              <label className="calc__label">Первоначальный взнос</label>
              <input className="calc__input" type="text" id="contribution"/>
              <input className="calc__range" type="range" min="10" max="100" step="5"/>
              <p className="calc__text">10%</p>
              <label className="calc__contribution">Срок кредитования</label>
              <input className="calc__input" type="text"/>
              <input className="calc__range" type="range"/>
              <div className="calc__range-wrapper">
                <p className="calc__text">5 лет</p>
                <p className="calc__text">30 лет</p>
              </div>
              <input type="checkbox"/>
              <label className="calc__checkbox">Использовать материнский капитал</label>
            </div>
          </div>
          <div className="calc__offer">
            <div className="calc__offer-wrapper">
              <h3 className="calc__step calc__step-header">Наше предложение</h3>
              <div className="calc__step-wrapper">
                <ul className="calc__list">
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">1 330 000 рублей </h3>
                    <p className="calc__text-item">Сумма ипотеки</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">9,40%</h3>
                    <p className="calc__text-item">Процентная ставка</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">27 868 рублей</h3>
                    <p className="calc__text-item">Ежемесячный платеж</p>
                  </li>
                  <li className="calc__item">
                    <h3 className="calc__step calc__steb-item">61 929 рублей</h3>
                    <p className="calc__text-item">Необходимый доход</p>
                  </li>
                </ul>
                <button className="calc__button">Оформить заявку</button>
              </div>
            </div>
          </div>
        </div>
        <div className="registration">
          <div className="registration__wrapper">
            <h3 className="registration__header">Шаг 3. Оформление заявки</h3>
            <ul className="registration__list">
              <li className="registration__item">
                <span className="registration__text">Номер заявки</span>
                <span className="registration__text-cell">№ 0010</span>
              </li>
              <li className="registration__item">
                <span className="registration__text">Цель кредита</span>
                <span className="registration__text-cell">Ипотека</span>
              </li>
              <li className="registration__item">
                <span className="registration__text">Стоимость недвижимости</span>
                <span className="registration__text-cell">2 000 000 рублей</span>
              </li>
              <li className="registration__item">
                <span className="registration__text">Первоначальный взнос</span>
                <span className="registration__text-cell">200 000 рублей</span>
              </li>
              <li className="registration__item">
                <span className="registration__text">Срок кредитования</span>
                <span className="registration__text-cell">5 лет</span>
              </li>
            </ul>
            <label className="visually-hidden">ФИО</label>
            <input type="text" className="registration__name" />
            <div className="registration__case">
              <label className="visually-hidden">Телефон</label>
              <input type="text" className="registration__phohe" />
              <label className="visually-hidden">Е-mail</label>
              <input type="text" className="registration__email" />
            </div>
            <div className="registration__button-case">
              <button className="registration__button">Отправить</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calc;