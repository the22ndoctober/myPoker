import React from "react"

class PokerCard{
    constructor(value,suit,inDeck){
        this.value = value
        this.suit = suit
    }
    

}

const suit = ['club', 'spade', 'diamonds', 'heart']

const value = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
               'Nine', 'Eight', 'Seven', 'Six', 'Five',
               'Four', 'Three', 'Two'
]
let allCards = []

let unpickedCards = allCards

let pickedCards = []

suit.forEach(suit=>{
    value.forEach(value=>{
        allCards.push(new PokerCard(value, suit)) 
    })
})

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
