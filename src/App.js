
import './App.css';
import Header from './component/Header';
import Player from './component/Player';
import TimeChallengeCards from './component/TimeChallengeCards';

function App() {
  return (
    <>
    <Header/>
      <Player/>
      <div id='challenges'>
      <TimeChallengeCards title={'Easy'} targetTime={1}/>
      <TimeChallengeCards title={'Medium'} targetTime={5}/>
      <TimeChallengeCards title={'Hard'} targetTime={10}/>
      <TimeChallengeCards title={'Pro'} targetTime={15}/>
      </div>
      
    </>
  );
}

export default App;
