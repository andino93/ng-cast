angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<'
    },
    controller: function() {
      // console.log('before onInit', this);
      // this.$onInit = () => {
      //   console.log(this);
      // };
    },
    templateUrl: 'src/templates/videoListEntry.html'

  });
