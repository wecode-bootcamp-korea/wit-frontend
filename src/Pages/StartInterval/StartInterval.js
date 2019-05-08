import React from 'react';
import './StartInterval.scss';


class Interval extends React.Component {


  render() {

    var endDate = new Date("Mar 15, 2020 12:00:00").getTime();
    var timer = setInterval(function() {

        let now = new Date().getTime();
        let t = endDate - now;

        if (t >= 0) {

            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);
            let msec = Math.floor((t % (1000)));


            document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
            "<span class='label'>분</span>";

            document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
            "<span class='label'>초</span>";

            document.getElementById("timer-msec").innerHTML = ("0"+msec).slice(-3) +
            "<span class='label'>밀리초</span>";

        } else {
            document.getElementById("timer").innerHTML = "The countdown is over!";
        }

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

          <div className="timecontainer">
            <p id="timer">
                <span id="timer-mins"></span>
                <span id="timer-secs"></span>
                <span id="timer-msec"></span>
            </p>
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
