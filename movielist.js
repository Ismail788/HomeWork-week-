
const url = 'https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json';
function getAjaxData(url, callback) {
const request = new XMLHttpRequest();
	request.addEventListener('load', function () {
	      if (this.status === 200) {
	callback(JSON.parse(request.responseText));

} else {
	  console.log('Something is probably wrong with the url');
}
});
	 request.addEventListener('error', function () {
	  console.log('Server error like timeout');
});
	 request.open("GET", url);
	 request.send();
}
//raido buttons All, Exelent, veryGood, Good
function check() {
    document.getElementById("All").checked = true;
}
function uncheck() {
    document.getElementById("All").checked = false;
}
function check() {
    document.getElementById("Exelent").checked = true;
}
function uncheck() {
    document.getElementById("Exelent").checked = false;
}
function check() {
    document.getElementById("veryGood").checked = true;
}
function uncheck() {
    document.getElementById("veryGood").checked = false;
}
function check() {
    document.getElementById("good").checked = true;
}
function uncheck() {
    document.getElementById("good").checked = false;
}
//rating movies
function rateMovie(movie){
	if(movie.rating>=8.5){
		movie.tag = 'Excellent';
}else if(movie.rating>=8){
		movie.tag = 'Very Good';
}else{
		movie.tag = 'Good';
}
	return movie;
}
//main move mapped
function mainMovies(movies){
	movies = movies.map(rateMovie);
	console.log(movies);
//map and reduce finding out averageRating
const averageRating = movies
	    .map(a=> parseFloat(a.rating))
		.reduce((a, b)=> a+b , 0)/movies.length;
//filter numbers
const numberOfExcellentMovies = movies
		.filter(a=> a.rating >= 8.5)
		.length;
function mainMovies(movie){
document.getElementById("movieList").innerHTML = numberOfExcellentMovies;

}

console.log(averageRating);

const numberOfMoviesInThe80s = movies
.filter(a=> (a.year>= 1980) && (a.year<=1989)).length;
console.log(numberOfMoviesInThe80s);
movies.forEach(function (myLi){
const li = document.createElement('li');
const nameText=document.createTextNode( myLi.name);
  li.appendChild(nameText);
movieList.appendChild(li);

});
console.log(movieList);
}
getAjaxData(url, mainMovies);
