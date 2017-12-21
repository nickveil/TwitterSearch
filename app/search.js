console.log('The follower is starting');

var Twit = require('twit'); // Importing Twit Library
var config = require('./config');
var T = new Twit(config);

// ***** Sets up user stream ********
var stream = T.stream('user');


// ***** Listening for any followers ******
stream.on('follow', followed);

function followed (event){
	console.log("Follow event");
	var name = event.source.name;
	var screenName = event.source.screen_name;
	tweetIt('@' + screenName + ' Thanks for following me!');

};



function tweetIt(msg) {
	var randNum = Math.floor(Math.random()*100);
	var tweet = {
		status: msg
	}


	T.post('statuses/update',tweet, tweeted);

	function tweeted (err, data, response) {
		if (err){
			console.log("Nope it didn't work ");
		} else {
			console.log("Think it worked, go check your profile! ")
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
