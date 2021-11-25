import React from "react";


export default function CombinationInfo(cards) {
    const COMBINATIONS = {pair:'pair', twoPairs:'two pairs', set:'set', fullHouse: 'full-house', square: 'square', street: 'street', flush: 'flush'}
    console.log(cards)
    if(cards.length !== 0){
        let maxWorth = Math.max.apply(null, cards)
        let maxCard = cards.find(card=> card.value.worth = maxWorth)
        let pairsCheck = cards.map(card=>{
            return card.value.name
        }).reduce((val1, val2)=>{
            if(val1 === val2){
                return true
            } else{return false}
            }
        )
        
        if(pairsCheck){
            return(
                <div>
                    {`You have a ${COMBINATIONS.pair} of ${cards.value.name}s`}
                </div>
            )
        }
        else{
            return(
                <div>
                    {`You have a ${maxCard.value.name} high`}
                </div>
            )
        }
    }
    
    
}