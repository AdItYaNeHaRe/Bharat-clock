import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import ClockTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

function App() {
  return <div>
    <center>
    <ClockHeading />
    <ClockSlogan />
    <ClockTime />
    </center>
  </div>
  
}

export default App
