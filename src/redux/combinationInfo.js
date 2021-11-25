import React from "react";


export default function CombinationInfo(props) {
    const COMBINATIONS = {pair:'pair', twoPairs:'two pairs', set:'set', fullHouse: 'full-house', square: 'square', street: 'street', flush: 'flush'}
    console.log(props.cards)
    if(props.cards.length > 0){
        let maxWorth = Math.max.apply(null, props.cards)
        let maxCard = props.cards.find(card=> card.value.worth = maxWorth)
        let pairsCheck = props.cards.map(card=>{
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
                    {`You have a ${COMBINATIONS.pair} of ${maxCard.value.name}s`}
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
    else{
        return(
            <div>no comb</div>
        )
    }
    
    
}