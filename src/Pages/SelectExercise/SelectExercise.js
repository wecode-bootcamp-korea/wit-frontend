import React from 'react';
import Selectcircle   from '../../Components/Selectcircle/Selectcircle';
import './SelectExercise.scss';


const list = [{name: '달리기'}, {name:'푸쉬업'}, {name:'달리기'},
              {name:'스쿼트'},{name:'테니스'}, {name:'박여나'},
              {name:'김민수'},{name:'캬하하'}, {name:'이숭준'},
              {name:'네네네'},{name:'뭅뭅'}, {name:'위코드'},
];

class Choice extends React.Component {







  render() {
    return (
      <div>
          <div className="top-bar">
            <p className="unify-text"> Select Exercises </p>
          </div>

          <div className="back-ground">

          {list.map((el) => {
            return (
                <Selectcircle
                  info={el}
                />
            )
          })}

        </div>
        // 아래부터는 선택한 운동값을 받아와서 보여주기
        <div>
  
        </div>

      </div>

    )
  }
}

export default Choice;
