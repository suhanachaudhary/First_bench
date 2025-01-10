
// import graph from '../assets/graph.PNG';

function ChartComponent(){

    return(
        <div className="accuracy">
            <div className="compare-accuracy">
                <div className="data-box1">
                    <i className="fa-regular fa-square-check"></i>
                    <h3>Compare Accuracy</h3>
                </div>
                <div className="image">
                    <img src="/graph.PNG" alt="accuracy graph" />
                </div>
            </div>
            <div className="compare-accuracy">
                <div className="data-box1">
                    <i className="fa-solid fa-hourglass"></i>
                    <h3>Time Taken</h3>
                </div>
                <div className="image">
                    <img src="/time.PNG" alt="accuracy graph" />
                </div>
            </div>
        </div>
    )
}

export default ChartComponent;
