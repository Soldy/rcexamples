'use strict';


const tictacBase =  function(){
    let _game_log = [];
    let _current={x:0,o=0,free:511,log:[]};
    const _winning = [7,56,73,146,273,292,448];
    const _positions = [
        [1,2,4],
        [8,16,32],
        [64,128,256]
    ];
    const _checkWin = function(current){
        for (let i of _winning)
            if((current&_current.free)===_current.free)
                return true;
        return false;
    }
    const _checkFree = function(step){
        if((_current.free&step)!==step)
           return false;
        return true;
    }
    const _reset = function(){
        _current_x = 0;
        _current_o = 0;
        _current_free = 511;
    }
    const _step = function(step){
        if(!_checkFree(step))
            return false;
        _current.log.push(step);
        _current.free=_current.free-step;
        if(_current.log.length % 2){
           _current.free=_current.o+step;
           _checkWincurrent(_current.o);
           return true;
        }
        _current.free=_current.x+step;
        _checkWincurrent(_current.x);
    }
}



/*
1  | 2   | 4 
8  | 16  | 32
64 | 128 | 256
*/
