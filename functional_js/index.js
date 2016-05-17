// Exercise 18: Retrieve url of the largest boxart
// Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.
// (
//
// function() {
// 	var boxarts = [
// 			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
// 			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//             { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" },
// 			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
// 		];
//
// 	// You should return an array containing only the URL of the largest box art. Remember that reduce always
// 	// returns an array with one item.
//
//
//     var newArt = boxarts
//                     .map(function (art) {
//                         return {size: art.width * art.height, url: art.url};
//                     })
//                     .reduce(function (val1, val2) {
//                         if (val1.size > val2.size) {
//                             return val1;
//                         } else {
//                             return val2;
//                         }
//                     })
//                     .map(function (e) {
//                         return e.url;
//                     })
//                 ];
//
// 	console.log(newArt);
// }
//
// )();



// Exercise 19: Reducing with an initial value

// (
// function() {
// 	var videos = [
// 		{
// 			"id": 65432445,
// 			"title": "The Chamber"
// 		},
// 		{
// 			"id": 675465,
// 			"title": "Fracture"
// 		},
// 		{
// 			"id": 70111470,
// 			"title": "Die Hard"
// 		},
// 		{
// 			"id": 654356453,
// 			"title": "Bad Boys"
// 		}
// 	];
//
// 	// Expecting this output...
// 	// [
// 	//	 {
// 	//		 "65432445": "The Chamber",
// 	//		 "675465": "Fracture",
// 	//		 "70111470": "Die Hard",
// 	//		 "654356453": "Bad Boys"
// 	//	 }
// 	// ]
//
//     var newVideos = videos.
// 		reduce(function(accumulatedMap, video) {
//     		var obj = {};
//
//             obj[video.id] = video.title;
//
//     		// Object.assign() takes all of the enumerable properties from
//     		// the object listed in its second argument (obj) and assigns them
//     		// to the object listed in its first argument (accumulatedMap).
//     		return Object.assign(accumulatedMap, obj);
// 		},
//     		// Use an empty map as the initial value instead of the first item in
//     		// the list.
// 		{});
//
// 	console.log(newVideos);
// }
// )();



// Exercise 20: Retrieve the id, title, and smallest box art url for every video.
// (function () {
//     "use strict";
//     var movieLists = [
// 		{
// 			name: "New Releases",
// 			videos: [
// 				{
// 					"id": 70111470,
// 					"title": "Die Hard",
// 					"boxarts": [
// 						{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
// 						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
// 					],
// 					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
// 					"rating": 4.0,
// 					"bookmark": []
// 				},
// 				{
// 					"id": 654356453,
// 					"title": "Bad Boys",
// 					"boxarts": [
// 						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
// 						{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
//
// 					],
// 					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
// 					"rating": 5.0,
// 					"bookmark": [{ id:432534, time:65876586 }]
// 				}
// 			]
// 		},
// 		{
// 			name: "Thrillers",
// 			videos: [
// 				{
// 					"id": 65432445,
// 					"title": "The Chamber",
// 					"boxarts": [
// 						{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
// 						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
// 					],
// 					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
// 					"rating": 4.0,
// 					"bookmark": []
// 				},
// 				{
// 					"id": 675465,
// 					"title": "Fracture",
// 					"boxarts": [
// 						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
// 						{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
// 						{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
// 					],
// 					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
// 					"rating": 5.0,
// 					"bookmark": [{ id:432534, time:65876586 }]
// 				}
// 			]
// 		}
// 	];
//
//     // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
// 	// [
// 	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
// 	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
// 	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
// 	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// 	// ];
//
//     return movieLists.concatMap(function(movieList) {
// 	  return movieList.videos.concatMap(function(video) {
// 	    return video.boxarts.
// 		  reduce(function(acc,curr) {
// 			if (acc.width * acc.height < curr.width * curr.height) {
// 			  return acc;
// 			}
// 			else {
// 			  return curr;
// 			}
// 		  }).
// 		  map(function(boxart) {
// 			return {id: video.id, title: video.title, boxart: boxart.url};
// 		  });
// 	  });
// 	});
//
//     console.log(newMovieLists);
// }());


// 21: Combine videos and bookmarks by index
function() {
	var videos = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			}
		],
		bookmarks = [
			{id: 470, time: 23432},
			{id: 453, time: 234324},
			{id: 445, time: 987834}
		],
	counter,
	videoIdAndBookmarkIdPairs = [];

	for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
		// Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
	}

	console.log(videoIdAndBookmarkIdPairs);
}
