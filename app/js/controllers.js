'use strict';

var pApp = angular.module('pApp', ['flow'])
.config(['flowFactoryProvider', function (flowFactoryProvider) {
  flowFactoryProvider.defaults = {
    target: 'http://52.11.44.108:3000/upload.php',
    permanentErrors: [404, 500, 501],
    maxChunkRetries: 1,
    chunkRetryInterval: 5000,
    simultaneousUploads: 4,
    singleFile: true
  };
  flowFactoryProvider.on('catchAll', function (event) {
    console.log('catchAll', arguments);
  });
  // Can be used with different implementations of Flow.js
  // flowFactoryProvider.factory = fustyFlowFactory;
}]);

pApp.controller('PCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generapon tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generapon tablet.'}
  ];
  $scope.sampleImg = "img/sample.png";
  $scope.iconImg = "img/icon.png";
  $scope.elementsize = 32;
  $scope.scale = 50;

//<input type="file" name="file" onchange="angular.element(this).scope().uploadFile(this.files)" style="ww" />
/*  $scope.uploadFile = function(files) {
      var fd = new FormData();
      //Take the first selected file
      fd.append("file", files[0]);
      console.dir(files[0]);
      //TODO
  
      $http.post(uploadUrl, fd, {
          withCredentials: true,
          headers: {'Content-Type': undefined },
          transformRequest: angular.identity
      }).success(function(){console.log('success');}).error(function(){console.log('error');});
  };*/

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
      this.reGrid();
    } else { 
      if (this.scale >= 50) {
        var steps = this.scale - 50;
        var mult = this.maxMult;
      } else {
        var steps = this.scale;
        var mult = this.minMult + steps*(this.maxMult - this.minMult)/50;
      }
      this.curWidth = Math.floor(this.width * mult);
      this.curHeight = Math.floor(this.height * mult);
      this.picStyle = { 
        width: this.curWidth + 'px', 
        height: this.curHeight + 'px'
      };
      this.reGrid();
    }
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
}]);

