import React from "react"

class PokerCard{
    constructor(value,suit){
        this.value = value
        this.suit = suit
        this.imgPath = `./content/${value.name}${suit}.png`
    }
    

}

const suit = ['Club', 'Spade', 'Diamonds', 'Heart']

const value = [{name: 'Ace', worth: 13}, {name: 'King', worth: 12}, {name: 'Queen', worth:11}, {name: 'Jack', worth: 10}, {name: 'Ten', worth: 9},
               {name: 'Nine', worth: 8}, {name: 'Eight', worth: 7}, {name: 'Seven', worth:6}, {name:'Six', worth: 5}, {name:'Five', worth: 4},
               {name:'Four', worth: 3}, {name:'Three', worth: 2}, {name:'Two', worth: 1}
]
let allCards = []

suit.forEach(suit=>{
    value.forEach(value=>{
        allCards.push(new PokerCard(value, suit)) 
    })
})

let unpickedCards = [...allCards]

let pickedCards = []



class CardStore{
    constructor(initialAllCards, initialUnpickedCards, initialPickedCards){
        this.allCards = initialAllCards
        this.unpickedCards = initialUnpickedCards
        this.pickedCards = initialPickedCards
    }

    giveCard(card){

        let currentCard = this.unpickedCards[card]

        this.unpickedCards.splice(card, 1)
        this.pickedCards.push(currentCard)

        return currentCard
        
    }
}

let MyCardStore = new CardStore(allCards, unpickedCards, pickedCards)

export default MyCardStore
