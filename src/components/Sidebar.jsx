
import { FiArrowRightCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="box">
      <div className="result-section">
        <img src="/result-image.png" alt="Result Illustration" className="result-image" />
        <h2>Your Result!</h2>
        <p>All your insights & details in one place</p>
      </div>
      <div className="passed">
        <div className="box1">
          <div className="cal"><i className="fa-solid fa-calendar-check"></i></div>
          <div className="cal2">
            <button>YOU'VE PASSED</button>
            <p style={{textAlign:"center"}}><b>136</b>/240</p>
          </div>
          <div className="cal3">
            <button>76% </button>
            <p>ACCURACY</p>
          </div>
        </div>
        <div className="box2">
          <div className="cal4">
            <img src="/user.png" alt="" />
          </div>

          <div className="cal5">
            <h3>Top Score</h3>
            <p style={{marginTop:"-10px"}}><b>136</b>/240</p>
          </div>
        </div>
        <div className="line1"></div>
        <div className="name">
          <p>By <b>Parth Akotkar</b></p>
          <div className="name2">92% Accuracy</div>
        </div>

        <h3 style={{marginLeft:"20px"}}>Improve your Marks</h3>
        <p style={{marginLeft:"20px"}} className='para'>Improve your score by racticing more</p>
        <button className='more'>Practice more</button>
      </div>

      <div className="revisit passed revisit-section">
        <h3>Revisit Paper</h3>
        <p>Challenge your friends by simply sharing a link to this test</p>
        <button className="revisit-button">
          Visit <FiArrowRightCircle size={20} />
        </button>
        <p><i className="fa-solid fa-circle-info"></i> Instructions for how to upload your handwritten material in given</p>
      </div>
      <div style={{height:"30px"}}></div>
      </div>
    </div>
  );
};

export default Sidebar;
