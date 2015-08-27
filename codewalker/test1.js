var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

// Let's scrape Anchorman 2
var url = 'https://www.crunchbase.com/organization/datafox';

request(url, function(error, response, html){
	if(!error){
		
		console.log('elad');
		console.log(html);
		
// 		
 		var $ = cheerio.load(html);
// 
// 		var title, release, rating;
// 		var json = { title : "", release : "", rating : ""};
// 		
// 		$('.header').filter(function(){
// 	        var data = $(this);
// 	        title = data.children().first().text();
// 	        release = data.children().last().children().text();
// 
// 	        json.title = title;
// 	        json.release = release;
//         })
// 
//         $('.star-box-giga-star').filter(function(){
//         	var data = $(this);
//         	rating = data.text();
// 
//         	json.rating = rating;
//         })
	}
	else
	{
		console.log(error);
	}

	//fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
       	//console.log('File successfully written! - Check your project directory for the output.json file');
    //});
	
	//console.log(JSON.stringify(json, null, 4));

});
