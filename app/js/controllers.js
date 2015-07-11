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
  $scope.sampleImg = "img/icon.png";
  $scope.iconImg = "img/icon.png";
  $scope.elementsize = 32;
  $scope.scale = 50;

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
      this.oPicStyle = { 
        width: this.curWidth + 'px', 
        height: this.curHeight + 'px',
        'top': -1 * this.curHeight + 'px'
      };
      this.reGrid();
    } //TODO else {...}
  };

  $scope.elChange = function() {
    this.reGrid();
    this.miniStyle = {
      width: this.elementsize + 'px',
      height: this.elementsize + 'px'
    };
  };
  
  $scope.reGrid = function() {
    this.sideXImgs = Math.floor(this.curWidth / this.elementsize) + 1;
    this.sideYImgs = Math.floor(this.curHeight / this.elementsize) + 1;
    this.matX = [];
    this.matY = [];
    for (var x = 0; x < this.sideXImgs; x++) {
      this.matX[x] = 0;
    }
    for (var y = 0; y < this.sideYImgs; y++) {
      this.matY[y] = 0;
    }
  };
});

