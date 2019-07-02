import React from 'react';
import './Progressbar.scss';
import { VictoryPie, VictoryLabel, VictoryAnimation } from 'victory';

class Progressbar extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      // percent: 0,
      data: this.getData(0),
      pause: this.props.pause,
      temp: false,
      current_time: 0,
    };
  }

  componentDidUpdate(prevProps) {
    console.log("before", prevProps, this.props.pause)

    if (prevProps.pause === false && this.props.pause === true) {
      this.stop();
    }

    if (prevProps.pause === true && this.props.pause === false) {
      this.start();

    }

    if (prevProps.status_change !== this.props.status_change) {
      //this.start()
      console.log('이전', prevProps)
      console.log('이후', this.props)
      this.stop();
      this.start();
    }
  }

  stop() {

    clearInterval(this.setStateInterval)

  }

  start() {
    console.log("현재 정지버튼을 눌렀는지 트루 폴스", this.state.pause)

  //   this.setState(
  //     {
  //     //percent: percent,
  //     data: this.getData(0),
  //   }, () => console.log("I am getData(0)", this.state.data, this.getData(1))
  // );

    let sec = 1;
    this.setStateInterval = window.setInterval(() => {

      //percent = (percent > 100) ? 0 : percent;
      sec++;
      this.setState(
        {
          //percent: percent,
          data: this.getData(sec),
          current_time: sec
        }, () => console.log("I am getData(sec)", this.state.data, this.getData(1), sec, this.state.current_time)
      )
    }, 1000);
  }

  componentDidMount() {

    this.start()

  }

  componentWillUnmount() {

    clearInterval(this.setStateInterval);

  }

  getData(sec) {
    if (this.props.total_time === 0) return;
    //console.log(this.props.total_time, (100/this.props.total_time)*sec)
    //return [{ x: 1, y: 30 }, { x: 2, y: 70}];

    return [
      {
        x: 1,
        y: (100/this.props.total_time)*sec
      }, {
        x: 2,
        y: 100-(100/this.props.total_time)*sec
      }
    ];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: (d) => {
                const color = d.y > 90 ? "red" : "#D5FF45";
                return d.x === 1 ? color : "transparent";
              }
            }
          }}
          />
        </svg>
      </div>
    );
  }
}

export default Progressbar
