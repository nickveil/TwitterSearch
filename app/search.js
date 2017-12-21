console.log('The search is starting');

var Twit = require('twit'); // Importing Twit Library
var config = require('./config');
var T = new Twit(config);

tweetIt();

function tweetIt() {
	var randNum = Math.floor(Math.random()*100);
	var tweet = {
		status: 'Here is a random number ' + randNum + ' #helloWorld from node.js'
	}




	T.post('statuses/update',tweet, tweeted);

	function tweeted (err, data, response) {
		if (err){
			console.log("Nope it didn't work ", response);
		} else {
			console.log("Think it worked, go check your profile! " ,data)
		}
	}

}

// ******* Code section for geting tweets *******

// var params = {
// 	q: 'Christmas -filter:retweets filter:safe',
// 	geocode: '46.656492,-99.358148,50mi',
// 	count: 10
// };


// T.get('search/tweets', params, gotData );

// function gotData(err, data, response) {
// 	var tweets = data.statuses;
	 
// 	 for(var i =0; i<tweets.length;i++){
// 		console.log(tweets[i].text);
// 	}

// }
