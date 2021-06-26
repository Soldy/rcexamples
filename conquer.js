'use strict';

const $planet = require('./lib/planet.js');

const conquerBase =  function(){
    let _x = 16;
    let _y = 16;
    let _planets = {};
    let _players_count = 2;
    let _players = {};
    const _universeGenerator = function(){
        _planets = [];
        let serial = 0;
        for (let y = 0 ; _y > y; y++)
            for (let x = 0 ; _x > x; x++){
                let name = ('planet_'+serial.toString(32));
                if(5 > Math.round(Math.random()*20)){
                    _planets[name]= new $planet(
                        name,
                        x,
                        y
                    );
                    serial++;
                }
            }
    };
    const _naturalPlanets = function(){
        let out =[];
        for (let i of _planets)
            if(i.natural())
                out.push(i.name);
        return out;
    };
    const _newPlayer = function(serial, name){
        if(typeof name === 'undefined')
            name = 'player_'+serial.toString();
        _players[name] = {
            name,
        };
        _planetToPlayer(
            name,
            _planets[
                _randomNaturalPlanet()
            ]
        );
    };
    const _planetToPlayer = function(player, planet){
        _planets[planet].toPlayer(_players[player]);
        _players[player].planetAdd(planet);
    };
    const _randomNaturalPlanet = function(){
        const planets = _naturalPlanets();
        return planets[
            Math.floor(Math.round()*planets.length)
        ];
    };
    const _generatePlayers = function(){
        _players = {};
        for(let i = 0 ; _players_count > i ; i++ ){
            _newPlayer(i);
        }
    };

};
