'use strict';



const conquerBase =  function(){
    let _planets = [];
    let players = 2;
    const _universeGenerator = function(){
        _planets = [];
        let serial = 0;
        for (y = 0 ; 16 > y; y++)
            for (x = 0 ; 16 > x; x++){
                if(5 > Math.round(Math.random()*20))
                    planet.push({
                        'name'      : serial.toString(32),
                        'x'         : x,
                        'y'         : y,
                        'flot'      : [],
                        'buildings' : [],
                        'moons'     : []
                    });
                    serial+;
                ;
            }
                 
            

    }

}
