'use strict';

/* Directives */
console.log('directive stuff yay');

pApp.directive('imageonload', function() {
  return {
//    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        scope.width = element[0].width;
        scope.height = element[0].height;
        scope.curWidth = element[0].width;
        scope.curHeight = element[0].height;
        var b = element[0].width > element[0].height ? element[0].width : element[0].height;
        var s = element[0].width < element[0].height ? element[0].width : element[0].height;
        scope.maxMult = 1280 / b;
        scope.minMult = 32 / s; 
        //TODO if (maxMult < 1) { //resize img };
        scope.$apply();
      });
    }
  };
});
