import "./App.css";
import Areachart from "./components/Areachart/Areachart";
import Linechart from "./components/Linechart/Linechart";

function App() {
  return (
    <div className="App">
      <Linechart></Linechart>
      <Areachart></Areachart>
    </div>
  );
}

export default App;
