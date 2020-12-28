import logo from './logo.svg';
import './App.css';

// Mock data first
const borrowers = [
  {name: "Bowser"},
  {name: "Mario", ui_test: "active_item"},
  {name: "Luigi"},
  {name: "Samus"},
]

function ConsoleScreen() {
  return (
    <div className="console">
      <div className="console_screen">
          <div className="console_screen-display">
            <em>Borrowers</em><br></br>
            {borrowers.map(borrower => (
              <div class={borrower.ui_test}>{borrower.name}</div>
            ))}
          </div>
      </div>
      <div className="console_buttons">
        <div className="console_directions">
            <div className="console_direction console_upDown">
              <button>U</button>
              <button>D</button>
            </div>
            <div className="console_direction console_leftRight">
              <button>L</button>
              <button>R</button>
            </div>
        </div>
        <div className="AB_buttons">
            <button className="console_btn--circle console_accept"></button>
            <button className="console_btn--circle console_back"></button>
        </div>
      </div>
      <div className="startSelect_buttons">
        <button className="console_start">Start</button>
        <button className="console_select">Select</button>
      </div>
    </div>
  );
}

export default ConsoleScreen;
