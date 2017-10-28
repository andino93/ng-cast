angular.module('video-player')
  .service('youTube', function($http) { 
    this.search = function(query, maxResults, callback) {
      
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search', 
        params: {
          key: window.YOUTUBE_API_KEY,
          q: query,
          maxResults: maxResults,
          part: 'snippet',
          type: 'video' 
        }
      }).then((data) => {
        callback(data.data.items);
        console.log('pass', data);
      }, (data) => console.log('fail', data));
        
    };
  });
  
