import MyCardStore from './redux/cardStore';
import cardsDrop from './modules/cardsDrop';
import {React,useState} from 'react';
import './css/App.css';



function App() {
  let [cards,setCards] = useState([])



  const run = ()=>{
    
    setCards(cardsDrop(2))
    
    console.log(cards)
    console.log(MyCardStore.pickedCards)
  }

  return (
    <div className="App">
      <div className='handHolder'>
        {cards.map(card=>{
          return(
            <div className='card'>
              {card.value}
            <br/>
              {card.suit}
            </div>
          )
        })}

      </div>
      <button onClick={run}>press me uebok</button>
    </div>
  )

  
}

export default App;
