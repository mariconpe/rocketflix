import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
  } from './api.js'


const title= document.getElementById('movie-title');
const overview = document.getElementById('movie-overview');
const poster = document.getElementById('movie-poster');
const lang = document.getElementById('movie-language');
const average = document.getElementById('movie-average');
const button = document.getElementById('shuffle-button');
const details = document.getElementById('movie-details');
var click = 0;

$('#shuffle-button').click(function (){
    if(click === 0) {
      poster.setAttribute('style','height:300px');
      poster.setAttribute('alt', 'Pôster do filme');
      details.removeAttribute('style', 'display: none');
      details.setAttribute('style', 'display: flex');      
    }
    click++;
}
);

function getMovie(){
  poster.removeAttribute('src');
  poster.removeAttribute('alt');
      let movieID = String(Math.floor((Math.random()*500000)+55));
      let APIRequestURL = BASE_URL+movieID+'?'+API_KEY+'&'+language;
      console.log(APIRequestURL);
      $.getJSON(APIRequestURL, function (movies){
        var movieList = [movies.title, movies.overview, movies.poster_path, movies.vote_average];
        title.innerText = movieList[0];
        details.setAttribute('style','display: flex');
        (movieList[1] != null) && (movieList[1] != "") ? overview.innerText=movieList[1] : overview.innerText = 'Sinopse indisponível';
        (movieList[2] != null) ? poster.setAttribute('src', IMG_URL + movieList[2]) : poster.setAttribute('src','./assets/poster-not-available.jpg');
        if ((movieList[3] != null) && (movieList[3] != "")) {
          average.innerText=movieList[3]+' ★';
        }  
        {
          average.innerText='N/A ★'         
        };
        
      })
      .fail(
        getMovie
      )
      
    }

$(button).click(getMovie);