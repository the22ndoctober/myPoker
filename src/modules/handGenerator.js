
import cardsDrop from './cardsDrop';
import {React,useState} from 'react';
import { rotateInDownRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import CombinationInfo from '../redux/combinationInfo';
import MyCardStore from '../redux/cardStore';



export default function HandsGenerator() {
    let [myCards,setMyCards] = useState([])
    let [enemyCards,setEnemyCards] = useState([])
    let [RotateInDownRight,setRotateInDownRight] = useState()
    
    console.log(MyCardStore)
    const run = ()=>{
    
    setMyCards(cardsDrop(2))
    setEnemyCards(cardsDrop(2))
    setRotateInDownRight(styled.div`animation: 0.8s ${keyframes`${rotateInDownRight}`} 1`)
    }

    return(
        <div className="main">
            <button onClick={run}>Give Cards</button>
            <div className='handHolder'>
                <CombinationInfo cards={myCards}/>
                {myCards.map((card,id)=>{
                let myclass
                id%2 != 0 ? myclass ={flip:'card__image-leftFlip', text:'card__text-leftAlign'} : myclass = {flip:'card__image-rightFlip', text:'card__text-rightAlign'}
                    return(
                    <div className='card'>
                        <div className='card__Container'>
                        <div className={myclass.flip}>
                            <RotateInDownRight>
                            <div className='card__Image'>
                                <img srcSet={card.imgPath} alt=""/>
                            </div>                 
                            </RotateInDownRight>                                                
                        </div>
                        </div>
                        <div className={myclass.text}>
                        <br/>
                        {card.value.name}
                        <br/>
                        {card.suit}
                        </div>
                    </div>
                    )
                })
                }

            </div>

            <div className='handHolder'>
                {enemyCards.map((card,id)=>{
                    let myclass = ''
                    id%2 != 0 ? myclass ={flip:'card__image-leftFlip', text:'card__text-leftAlign'} : myclass = {flip:'card__image-rightFlip', text:'card__text-rightAlign'}
                    return(
                        <div className='card'>
                        <div className='card__Container'>
                            <div className={myclass.flip}>
                            <RotateInDownRight>
                                <div className='card__Image'>
                                <img srcSet={card.imgPath} alt=""/>
                                </div>                 
                            </RotateInDownRight>                                                
                            </div>
                        </div>                                                
                        <div className={myclass.text}>
                            <br/>
                            {card.value.name}
                            <br/>
                            {card.suit}
                        </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
