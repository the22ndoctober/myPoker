import MyCardStore from './redux/cardStore';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {MyCardStore.setCardToDeck({value:'Ten', suit:'spade'})}
      <button onClick={()=>{console.log(MyCardStore)}}>press me uebok</button>
    </div>
  )

  
}

export default App;
