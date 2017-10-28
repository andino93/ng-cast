angular.module('video-player')
  .component('app', {
    
    controller: function(youTube) {
      this.videos = exampleVideoData,
      this.currentVideo = this.videos[1],
      this.search = '',
      
      this.selectVideo = (video) => {
        this.search = video;
      },
      
      this.searchResults = (query) => {
        youTube.search(query, 5, (data) => { 
          this.videos = data;
          this.currentVideo = data[0];
        });
      },
      
      this.onClick = (event) => {
        this.currentVideo = event;
      };
      

    },
    
    templateUrl: 'src/templates/app.html'
  });


