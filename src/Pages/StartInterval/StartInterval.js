import React from 'react';
import './StartInterval.scss';


class Interval extends React.Component {
  constructor() {
    super();
    this.state = {
      action_choice: 180000,
      break_choice : 10,
      set_choice: 3,
    }
  }

  componentDidMount() {
    const intervalID = setInterval(() => {

      if (this.state.action_choice ===1) {
        clearInterval(intervalID);
      }
      this.setState({
        action_choice: Math.floor((this.state.action_choice % (1000 * 60)) / 1000)

      })
    }, 1000);
  }


  render() {

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
          <div className="timecontainer">
           <p id="timer">
               <span id="timer-mins"></span>
               <span id="timer-secs"></span>
               <span id="timer-msec"></span>
           </p>
          </div>
        </div>

        <div>
          <div id="countdown">
            <div id="countdown-number">
              // <span id="timer-secs"></span>
            </div>
              {this.state.action_choice}

            <svg>
              <circle r="200" cx="400" cy="400"></circle>
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
