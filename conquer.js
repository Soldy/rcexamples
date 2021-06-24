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
                    _planets['planet_'+serial.toString(32)]={
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
    const _planetRemoveFromPlayer = function(planet){
        for (let i of _players){
            let n = i.planets.indexOf(planet);
            if(0>n)
                continue;
            i.planets.splice(n,1);
        }
        _players[player].natural = true;
    }
    const _planetToPlayer = function(player, planet){
        _planetRemoveFromPlayer(planet)
        _players[player].natural = false;
        _players[player].planets.push(planet);
    }

}
