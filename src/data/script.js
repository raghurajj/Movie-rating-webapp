export default  {
	"movies": [{
            "movie_id": 1,
			"title": "Harry Potter 7",
			"release_date": "2011/01/12",
			"director_id": 5,
			"actors": [
				1,
				3,
				4,
				6
			],
			"avg_rating": "3.5",
			"description": "Some big string"
		},
		{
            "movie_id": 2,
			"title": "The GodFather",
			"release_date": "1973/04/10",
			"director_id": 6,
			"actors": [
				13,
				11
			],
			"avg_rating": "4.6",
			"description": "Some big string"
		},
		{
            "movie_id": 3, 
			"title": "Silence Of The Lambs",
			"release_date": "1991/11/01",
			"director_id": 7,
			"actors": [
				2,
				9,
				6
			],
			"avg_rating": "4.4",
			"description": "Some big string"
		}
	]
}

console.log(movieObject.movies);
// Prints the list of movies where each list element is an movie object

console.log(movieObject.movies[0].title);
// Prints the title of the first movie from the list

console.log(movieObject.movies[2].actors[2]);
// Prints the 3rd actor's id from the 3rd movie
