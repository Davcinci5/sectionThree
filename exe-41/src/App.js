import './App.css';
import LineChart from './components/Chart/Chart';
import Tool from './components/Tool/Tool';


function App() {
  return (
    <div className="App">
       <div className="chart">
         <Tool/>
        <LineChart />
       </div>
    </div>
  );
}

export default App;



      