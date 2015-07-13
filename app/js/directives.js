'use strict';

/* Directives */
console.log('directive stuff yay');

pApp.directive('imageonload', function() {
  return {
//    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        //TODO if w or h > 1080 then make pic smaller with picStyle
        var w = element[0].width;
        var h = element[0].height;
        scope.width = w;
        scope.height = h;
        var b = w > h ? w : h;
        var s = w < h ? w : h;
        scope.maxMult = 900 / b;
        if (scope.maxMult < 1) {
          scope.extMaxMult = 1000 / b;
        }
        scope.minMult = 32 / s; 
        scope.curWidth = scope.maxMult > 1 ? w : w*scope.maxMult;
        scope.curHeight = scope.maxMult > 1 ? h : h*scope.maxMult;
        scope.reGrid();
        scope.browserfy(scope.curWidth, scope.curHeight);
        //TODO if (maxMult < 1) { //resize img };
        scope.$apply();
      });
    }
  };
});
