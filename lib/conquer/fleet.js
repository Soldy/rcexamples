'use strict';


const fleetBase = function(in_name, in_x, in_y){
    this.target = function(x, y){
        _target_x = parseInt(x);
        _target_y = parseInt(y);
        _routeCalc();
    }
    this.move = function(){
        return move();
    }
    let _name = in_name;
    let _x = 0;
    let _y = 0;
    let _moved_x = 0;
    let _moved_y = 0;
    let _zone_x = in_x;
    let _zone_y = in_y;
    let _ships = 0;
    let _target_x = in_x;
    let _target_y = in_y;
    let _distance_x = 0;
    let _distance_y = 0;
    let _distance = 0;
    const _block_x = 256;
    const _block_y = 256;
    const _speed  = 30;
    const _routeCalc = function() {
        if (
            (_zone_x === _target_x) &&
            (_zone_y === _target_y)
        )
            return ;
        _distance_x = Math.abs(
            (_zone_x - _target_x)*_block_x
        );
        _distance_y = Math.abs(
            (_zone_y - _target_y)*_block_y
        );
        _distance = Math.round(
            Math.sqrt((x*x)+(y*y))
        );
    }
    const _move = function() {
        const percent = (_speed / _distance);
        _moved_x = Math.round(
            _distance_x*pecent
        );
        _moved_y = Math.round(
            _distance_y*pecent
        );
        _distance_x = (
            _distance_x - _moved_x
        );
        _distance_y = (
            _distance_y - _moved_y
        );
        if( _zone_x > _target_x ){
            _x = (_x - _moved_x);
        }else
            _x = (_x + _moved_x);
        if( _zone_y > _target_y ) {
            _y = (_y - _moved_y);
        }else
            _y = (_y + _moved_y);
        if( _x > _block_x){
            _x = _x - _block_x
            __zone_x = _zone_x - 1;
        } else if (0 > _x) {
            _x = _block_x - _x ;
            _zone_x = _zone_x + 1;
        }
        if( _y > _block_y){
            _y = _y - _block_y
            _zone_y = _zone_y - 1;
        } else if (0 > _y) {
            _y = _block_y - _y ;
            _zone_y = _zone_y + 1;
        }
    }

}


exports.fleet = fleetBase;

