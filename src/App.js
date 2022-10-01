
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/pricing/Pricing';
import AssignmentMarks from './Components/LineChart/AssignmentMarks';
import PhoneBar from './Components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
