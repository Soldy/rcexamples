'use strict';


const playerBase = function(in_name){
    this.planetRemove = function(planet){
        let planets = [];
        for (let i of _planets)
             planets.push(i.name());
        const n = planets.indexOf(
            planet.name()
        );
        if(0>n)
            return;
        _planets.splice(n,1);
    }
    this.planetAdd = function(planet){
        _planets.push(planet);
    }
    let _name = in_name.toString();
    const _planets = [];
    const _fleets = [];
}
exports.player = playerBase;

