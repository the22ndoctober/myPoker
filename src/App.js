import MyCardStore from './redux/cardStore';
import cardsDrop from './modules/cardsDrop';
import {React,useState} from 'react';
import './css/App.css';
import { rotateInDownRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';



function App() {
  let [myCards,setMyCards] = useState([])
  let [enemyCards,setEnemyCards] = useState([])
  let [RotateInDownRight,setRotateInDownRight] = useState()
  
  const run = ()=>{
    
    setMyCards(cardsDrop(2))
    setEnemyCards(cardsDrop(2))
    setRotateInDownRight(styled.div`animation: 0.8s ${keyframes`${rotateInDownRight}`} 1`)

  }

  
  return (
    <div className="App">
      
      <div className='handHolder'>
        {myCards.map((card,id)=>{
          let myclass = ''
          id%2 != 0 ? myclass ='myCard-leftFlip' : myclass = 'myCard-rightFlip'
            return(
              <div className='card'>
                <RotateInDownRight>
                  <div className='cardImage'>
                    <img className={myclass} srcSet={card.imgPath} alt=""/>
                  </div>
                  
                </RotateInDownRight>                                                
                <br/>
                {card.value}
                <br/>
                {card.suit}
              </div>
            )
          })
        }

      </div>

      <div className='handHolder'>
        {enemyCards.map(card=>{
            return(
              <div className='card'>
                <RotateInDownRight>
                  <img className='cardImage' srcSet={card.imgPath} alt=""/>
                </RotateInDownRight>                                                
                <br/>
                {card.value}
                <br/>
                {card.suit}
              </div>
            )
          })
        }

      </div>

      <button onClick={run}>Give Cards</button>
    </div>
  )

  
}

export default App;
