angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    
    controller: function() {

      // console.log(this)
      
    },
    
    templateUrl: 'src/templates/videoList.html'

  });
