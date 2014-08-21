
describe('Grid Module', function() {
  describe('GridService', function() {
    //Inject Grid module into this test
    beforeEach(module('Grid'));

    beforeEach(inject(function(GridService) {
      gridService = GridService;
    }));

    describe('.buildEmptyGameBoard', function() {
      var nullArr;

      beforeEach(function() {
        nullArr = [];
        for (var i = 0; i < 16; i++) {
          nullArr.push(null);
        }
      })

      it('should clear out the grid array with nulls', function() {
        var grid = [];
        for (var i = 0; i < 16; i++) {
          grid.push(i);
        }

        gridService.grid = grid;
        gridService.buildEmptyGameBoard();
        expect(gridService.grid).toEqual(nullArr);
      })

    });
  });
});