import React from "react";

export default class Player extends React.Component{
    constructor(initialHand,initialCoins, bbMod, initialNickname){
        this.hand = initialHand
        this.coins = initialCoins
        this.bbMod = bbMod
        this.nickname = initialNickname
        this.combinationInfo = ''
    }
    updateHand(hand){
        this.hand = hand
    }
    updateCoins(coins){
        this.coins = coins
    }
    updateCombinationInfo(combinationInfo){
        this.combinationInfo = combinationInfo
    }

}