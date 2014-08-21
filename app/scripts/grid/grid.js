'use strict';

angular.module('Grid', [])
  .service('GridService', function(TileModel) {
    this.grid = [];
    this.tiles = [];
    this.tiles.push(new TileModel( {x: 1, y: 1}, 2));
    this.tiles.push(new TileModel( {x: 1, y: 2}, 2));
    this.size = 4;

    this.buildEmptyGameBoard = function() {
      var service = this;

      for (var i = 0; i < service.size * service.size; i++) {
        this.grid[i] = null;
      }
    };
  })

  .factory('TileModel', function() {
    var Tile = function(pos, val) {
      this.x = pos.x;
      this.y = pos.y;
      this.value = val || 2;
    };

    return Tile;
  });