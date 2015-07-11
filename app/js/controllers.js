'use strict';

var pApp = angular.module('pApp', []);

pApp.controller('PCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generapon tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generapon tablet.'}
  ];
  $scope.sampleImg = "img/sample.png";
  $scope.scaleChange = function() {
    if (this.maxMult > 1) {
      if (this.scale >= 50) {
        var steps = this.scale - 50
        var mult = 1 + steps*(this.maxMult - 1)/50;
      } else {
        var steps = this.scale
        var mult = this.minMult + steps*(1 - this.minMult)/50
      } 
      this.curWidth = Math.floor(this.width * mult);
      this.curHeight = Math.floor(this.height * mult);
      this.picStyle = { 
        width: this.curWidth + 'px', 
        height: this.curHeight + 'px'
      };
    } //TODO else {...}
  };
});

