'use strict';

const planetBase = function(in_name, in_x, in_y){
    this.name = function(){
        return _name.toString();
    };
    this.natural = function(){
        if(_natural)
            return true;
        return false;
    };
    this.toNatural = function(){
        _natural = true;
    };
    this.toPlayer = function(player){
        _owner.planetRemove(
            _name.toString()
        );
        _natural = false;
        _owner = player;
    };
    let _natural = true;
    let _owner = '';
    let _name = in_name.toString();
    let _ships = 0;
    const _x = parseInt(in_x);
    const _y = parseInt(in_y);
    const _flot = [];
    const _fleett = [];
    const _buildings = [];
    const _moons = [];


};


exports.planet = planetBase;


