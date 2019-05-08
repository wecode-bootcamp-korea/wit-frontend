import React from 'react';
import './StartInterval.scss';


class Interval extends React.Component {


  render() {

    let countdownNumberEl = document.getElementById('countdown-number');
    let countdown = 10;

    countdownNumberEl.textContent = countdown;

    setInterval(function() {
      countdown = --countdown <= 0 ? 10 : countdown;

      countdownNumberEl.textContent = countdown;
    }, 1000);


    return (
      <div>
        <div>
          <div className ="globaltab">
            <p id="globalogo"> WE:Interval Train</p>
          </div>

          <div className = "upperbox">
            <div id="status">
              <p id="aboutext"> 운동 진행 </p>
            </div>
          </div>
        </div>

        <div className = "container">
          <div id="first">
            <p className="exname"> 팔굽혀 펴기</p>
          </div>
          <div id="second">
            <p className="exname"> 윗몸일으켜기 </p>
          </div>
          <div id="third">
            <p className="exname">스트레칭 </p>
          </div>
          <div id="fourth">
            <p className="exname"> 도마뱀 </p>
          </div>
        </div>
        <div>
          <div id="countdown">
            <div id="countdown-number"></div>
            <svg>
              <circle r="18" cx="20" cy="20"></circle>
            </svg>
          </div>
        </div>
        <div className="youtube">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-P01D-1vFJo"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>
        </div>
      </div>

    )
  }
 }
export default Interval;
