import React from "react"

class PokerCard{
    constructor(value,suit,inDeck){
        this.value = value
        this.suit = suit
        this.inDeck = inDeck
    }
    changeInDeckState(inDeck) {
        this.inDeck = inDeck
    }

}

const suit = ['club', 'spade', 'diamonds', 'heart']

const value = ['Ace', 'King', 'Queen', 'Jack', 'Ten',
               'Nine', 'Eight', 'Seven', 'Six', 'Five',
               'Four', 'Three', 'Two'
]
let allCards = [

]
suit.forEach(suit=>{
    value.forEach(value=>{
        allCards.push(new PokerCard(value, suit, false)) 
    })
})

class CardStore{
    constructor(initialState){
        this.state = initialState
    }

    setCardToDeck(cardToDeck){
        this.state.filter(card=> card.value === cardToDeck.value).find(card=> card.suit === cardToDeck.suit).inDeck = true
        return (
            <div className='card'>
                {cardToDeck.value}
                <br/>
                {cardToDeck.suit}
            </div>
        )
        
    }
}

let MyCardStore = new CardStore(allCards)

export default MyCardStore
