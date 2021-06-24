'use strict';



const conquerBase =  function(){
    let _planets = {};
    let _players_count = 2;
    let _players_ = {};
    const _universeGenerator = function(){
        _planets = [];
        let serial = 0;
        for (y = 0 ; 16 > y; y++)
            for (x = 0 ; 16 > x; x++){
                if(5 > Math.round(Math.random()*20)){
                    _planets['planet_'+serial]={
                        'name'      : serial.toString(32),
                        'x'         : x,
                        'y'         : y,
                        'flot'      : [],
                        'natural'   : true,
                        'buildings' : [],
                        'moons'     : []
                    });
                    serial+;
                }
            }
    }
    const _naturalPlanets = function(){
        let out =[];
        for (let i of _planets)
            if(i.natural)
                out.push(i.name);
        return out;
    }

}
