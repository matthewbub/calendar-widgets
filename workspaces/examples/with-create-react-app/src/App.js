import logo from './logo.svg';
import './App.css';
import {Calendar} from 'calendar-widgets';
import 'calendar-widgets/styles/Calendar-grid.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar />
      </header>
    </div>
  );
}

export default App;
