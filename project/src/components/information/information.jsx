import React, { useState } from 'react';
import Deposits from '../deposits/deposits';
import Insurance from '../insurance/insurance';
import {Tab} from '../../const';
import { Link } from 'react-router-dom';
import Service from '../service/service';
import Credits from '../credits/credits';
 
function Information() {
  const [activeTab, setActiveTab] = useState('deposits');

  const CityCardProperties ={
    [Tab.DEPOSITS]: {
      cardClass: 'cities__place-card',
      imageClass: 'cities__image-wrapper',
    },
    [Tab.INSURANCE]: {
      cardClass: 'near-places__card',
      imageClass: 'near-places__image-wrapper',
    },
    [Tab.SERVISES]: {
      cardClass: 'favorites__card',
      imageClass: 'favorites__image-wrapper',
    },
  };

  function tabClick(evt) {
    switch(evt.target.name) {
      case Tab.CREDITS: 
        setActiveTab(Tab.CREDITS);
        break;
      case Tab.INSURANCE: 
        setActiveTab(Tab.INSURANCE);
        break;
      case Tab.SERVISES: 
        setActiveTab(Tab.SERVISES);
        break;
      default: 
        setActiveTab(Tab.DEPOSITS)
        break;
    }
  }

  const renderDeposits = () => (
    <Deposits/>
  );

  const renderCredits = () => (
    <Credits/>
  );

  const renderInsurance = () => (
    <Insurance/>
  );

  const renderServises = () => (
    <Service/>
  );

  const renderTab = (hooks) => {
    switch(hooks) {
      case Tab.CREDITS:
        return renderCredits();
      case Tab.INSURANCE:
        return renderInsurance();
      case Tab.SERVISES:
        return renderServises();
      default:
        return renderDeposits();
    }
  };

  return(
    <>
      <section className="information">
        <div className="information__tabs">
          <ul className="information__tabs-list">
            <li className={`information__tabs-item ${activeTab === Tab.DEPOSITS && 'information__tabs-item--active'}`}
            id={Tab.DEPOSITS}
            onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name);
            }}>
              <Link className="information__tabs-text"
              to='#'
              onFocus={tabClick}
              name={Tab.DEPOSITS}
              >
                Вклады
              </Link>
            </li>
            <li className={`information__tabs-item ${activeTab === Tab.CREDITS && 'information__tabs-item--active'}`}
            id={Tab.CREDITS}
            onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name)
            }}
            >
              <Link className="information__tabs-text"
              to='#'
              onFocus={tabClick}
              name={Tab.CREDITS}
              >
                Кредиты
              </Link>
            </li>
            <li className={`information__tabs-item ${activeTab === Tab.INSURANCE && 'information__tabs-item--active'}`}
              id={Tab.INSURANCE}
              onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name)
              }}
            >
              <Link className="information__tabs-text"
              to='#'
              onFocus={tabClick}
              name={Tab.INSURANCE}
              >
                Страхование
              </Link>
            </li>
            <li className={`information__tabs-item ${activeTab === Tab.SERVISES && 'information__tabs-item--active'}`}
            id={Tab.SERVISES}
            onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name)
            }}
            >
              <Link className="information__tabs-text"
              to='#'
              onFocus={tabClick}
              name={Tab.SERVISES}
              >Онлайн-сервисы
              </Link>
            </li>
          </ul>
        </div>
        {renderTab(activeTab)}
      </section>
    </>
  );
}

export default Information;