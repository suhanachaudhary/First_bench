
// Metrics.js

import ChartComponent from "./ChartComponent";


const Metrics = () => {
  return (
    <div className="metrics">

      <div className="compare">
        <div className="chart-box">
          <div className="icon">
            <i className="fa-regular fa-square-caret-down"></i>
            <h4>Compare Accuracy</h4>
          </div>
        </div>
        <div className="chart-box">
          <div className="icon">
            <i className="fa-regular fa-square-caret-down"></i>
            <h4>Compare Accuracy</h4>
          </div>
        </div>
        <div className="chart-box">
          <div className="icon">
            <i className="fa-regular fa-square-caret-down"></i>
            <h4>Compare Accuracy</h4>
          </div>
        </div>
      </div>

    <div className="improvement">
      <div className="data-box">
        <div className="icon">
          <i className="fa-brands fa-deviantart"></i>
          <h3>Improvements</h3>
        </div>

        <p>Subject Understanding</p>
        <div className="group">
          <div className="btn green">Geography</div>
          <div className="btn yellow">Politics</div>
          <div className="btn green">Hindi</div>
          <div className="btn red">EVS</div>
          <div className="btn green">Mathematics</div>
          <div className="btn gray">Science</div>
          <div className="btn red">English Literature</div>
          <div className="btn yellow">Indian History</div>
          <div className="btn green">Economics</div>
        </div>
      </div>
      <div className="data-box">
        <div className="icon">
          <i className="fa-regular fa-clock"></i>
          <h3>Response Time</h3>
        </div>
        <div className="time">Std Time - 2min</div>
        <div className="percent"><h2>60</h2>% Ans took&nbsp;&nbsp;&nbsp;&nbsp; <i className="fa-solid fa-arrow-up arrow"></i>&nbsp; 2min</div>
        <div className="line"></div>
        <p className="response-time slow">You are <span style={{color:"red"}}>slow</span> !</p>
      </div>

      <div className="data-box">
        <div className="icon">
          <i className="fa-brands fa-deviantart"></i>
          <h3>Approach Data</h3>
        </div>
        <div className="ap"><div className="per">25%</div><div className="content">Based on <span>Facts</span></div></div>
        <div className="ap"><div className="per">32%</div><div className="content">Bases on <span>Analysis</span></div></div>
        <div className="ap"><div className="per">19%</div><div className="content">Based on <span>Elimination</span></div></div>
        <div className="ap"><div className="per">24%</div><div className="content">Based on <span>Guess</span></div></div>
      </div>
      <div className="data-box">
        <div className="icon">
          <i className="fa-solid fa-snowflake"></i>
          <h3>Suggestion</h3>
        </div>
        <div className="range">
          <div className="one">1-12</div>
          <div className="one">12-32</div>
          <div className="one">32-40</div>
        </div>

        <div className="sec">
          <div className="time">40sec</div>
          <div className="time">1.5min</div>
          <div className="time">3min</div>
        </div>
        <div className="level">
          <div className="type" style={{color:"#5db996"}}>Easy</div>
          <div className="type" style={{color:"yellow"}}>Medium</div>
          <div className="type" style={{color:"red"}}>Hard</div>
        </div>
      </div>
    </div> 

      <ChartComponent/>

    </div>
  );
};

export default Metrics;
