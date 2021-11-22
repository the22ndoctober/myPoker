// import React from 'react'
import MyCardStore from '../redux/cardStore'

const randomCard = cardsAmount =>{
  return Math.round(Math.random() * cardsAmount-1)
}

export default function cardsDrop(cardsAmount){
  let cards = []

  for(let i = 0; i <= cardsAmount-1; i++){
    let myCardKey = randomCard(MyCardStore.unpickedCards.length)
    
    cards.push(MyCardStore.giveCard(myCardKey))
  }
  
  return cards
}