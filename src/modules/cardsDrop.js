// import React from 'react'
import MyCardStore from '../redux/cardStore'

const randomCard = cardsAmount =>{
  
  return Math.floor(Math.random() * cardsAmount)
}

export default function cardsDrop(cardsAmount){
  let cards = []
  
  for(let i = 0; i <= cardsAmount-1; i++){
    let myCardKey = randomCard(MyCardStore.unpickedCards.length-1)
    console.log(myCardKey)
    cards.push(MyCardStore.giveCard(myCardKey))
  }
  
  return cards
}