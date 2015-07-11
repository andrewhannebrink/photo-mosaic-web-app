'use strict';

/* Directives */
console.log('directive stuff yay');

pApp.directive('imageonload', function() {
  return {
//    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        var w = element[0].width;
        var h = element[0].height;
        scope.width = w;
        scope.height = h;
        scope.curWidth = w;
        scope.curHeight = h;
        var b = w > h ? w : h;
        var s = w < h ? w : h;
        scope.maxMult = 1280 / b;
        scope.minMult = 32 / s; 
        scope.picStyle = { 
          width: w + 'px', 
          height: h + 'px'
        };
        scope.reGrid();
        //TODO if (maxMult < 1) { //resize img };
        scope.$apply();
      });
    }
  };
});
