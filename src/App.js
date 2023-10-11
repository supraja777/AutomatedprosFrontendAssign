import './App.css';
import BackgroundColor from './Features/BackgroundColor/BackgroundColor';
import CurrentTime from './Features/CurrentTime/CurrentTime';
import FrequentCharacter from './Features/MaximumConsecutiveCharacters/MaximumConsecutiveCharacters.js';
import MetaMask from './Features/MetaMask/MetaMask';
import TargetSum from './Features/TargetSum/TargetSum';

function App() {
  return (
    <div>
      <MetaMask/>
      <hr/>
      <CurrentTime/>
      <hr/>
      <BackgroundColor/>
      <hr/>
      <FrequentCharacter/>
      <hr/>
      <TargetSum/>
    </div>
  );
}

export default App;
