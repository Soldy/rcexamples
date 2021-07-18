'use strict';



const cubeBase =  function(){
    this.get = function(){
        const number = Math.round(Math.random()*_size);
        _history.push(
            parseInt(number)
        );
        return parseInt(number)
    }
    this.history = function(){
        return [..history];
    }
    const _size = 6;
    const _history = [];

}


