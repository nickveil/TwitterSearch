console.log('The search is starting');

var Twit = require('twit'); // Importing Twit Library
var config = require('./config');
var T = new Twit(config);

var params = {
	q: 'Jimmies -filter:retweets filter:safe', //-filter:retweets filter:safe
	geocode: '46.656492,-99.358148,50mi',
	count: 10
	// result_type: 'recent'
	// id: 23424977
};

T.get('search/tweets', params, gotData );

function gotData(err, data, response) {
	
	var tweets = data.statuses;
	 
	 for(var i =0; i<tweets.length;i++){
		console.log(tweets[i].text);
	}

}

// T.get('trends/place', params, gotData );

// function gotData(err, data, response) {
// 	var tweets = data.trends;
// 	 // for(var i =0; i<tweets.length;i++){
// 		console.log(data);
// 	// }

// }