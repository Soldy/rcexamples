'use strict'


const packBase = function((){
    let _deck = [];
    let _colors = ['h','t','c','p'];
    let _types = ['2','3','4','5','6','7','8','9','j','q','k','a'];
    const _build = function(){
        _deck = [];
        for(let a of _colors)
            for(let b of _types)
                _deck.push(
                    a.toString()+
                    b.toString()
                );
    }
    const _shake = function(){
        let temp,
            rand,
            length = _deck.length,
            round = Math.floor((Math.random() * (length*2)) + length);
        for (let i =0 ; round> i ; i++){
            rand = Math.floor(Math.random() * length);
            temp = _deck[rand];
            _deck.splice(rand, 1);
            _deck.push(temp);
        }
    }
}
