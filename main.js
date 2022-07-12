import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
  } from './api.js'


const title= document.getElementById('movie-title');
const overview = document.getElementById('movie-overview');
const poster = document.getElementById('movie-poster');

$('#shuffle-button').click(function(){
  let movieID = String(Math.floor((Math.random()*500000)+55));
  let APIRequestURL = BASE_URL+movieID+'?'+API_KEY+'&'+language;
  $.getJSON(APIRequestURL, function(movies){
    var movieList = [movies.title, movies.overview, movies.poster_path];
    title.innerText=movieList[0];
    overview.innerText=movieList[1];
    poster.setAttribute=('src', IMG_URL + movieList[2]);
  })
  .fail(function(){
    title.innerText='Filme sem título';
    overview.innerText='Filme sem sumário';
    poster.setAttribute=('src', './assets/poster-not-available.jpg');
    poster.setAttribute=('alt', 'Pôster indisponível');
  });
});
      //$("#movie-title").remove();
      //$("<h2 id='movie-title'>"+movieTitle.title+'</h2>').appendTo('#movie-info');
      //if (movieTitle.poster_path =! null){
      //  $("#movie-poster").remove();
      //  $("<img  id='movie-poster' src='"+IMG_URL + movieTitle.poster_path+"'>").appendTo('figure');
      //}
      //else{
      //  $("#movie-poster").remove();
      //  $("<img  id='movie-poster' src='./assets/poster-not-available.jpg'>").appendTo('figure');
      //};
      //if (movieTitle.overview =! null){
      //  $("#movie-overview").remove();
      //  $("<p id='movie-overview'>"+movieTitle.overview+"</p>").appendTo('#movie-info');   
      //}
//
    //})
    //.fail(function() {             
    //  $("#movie-title").remove();
    //  $("<h2 id='movie-title'>"+ 'Filme indisponível'+ "</h2>").appendTo('#movie-info');
    //  $("#movie-poster").remove();
    //  $("<img  id='movie-poster' src='./assets/poster-not-available.jpg'>").appendTo('figure');
    //  $("#movie-overview").remove();
    //  $("<p id='movie-overview'>"+ 'Sumário indisponível'+ "</p>").appendTo('#movie-info');

