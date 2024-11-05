import './App.css';
import Card from './Card';
import CounterWithRef from './Component1';
import CounterWithState from './Component2';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Card/>
    {/* <CounterWithState/> */}
    </div>
  );
}

export default App;
