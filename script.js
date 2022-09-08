const APIKEY = '04c35731a5ee918f014970082a0088b1';
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

const main = document.querySelector('main');
const form = document.querySelector('form');
const input = document.getElementById('search');


//Initially get favorite movies
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);

    const respData = await resp.json();

    showMovies(respData.results)

    console.log(respData);
    return respData;
}

function showMovies(movies){

    //clear main
    main.innerHTML = '';

    movies.forEach(movie => {
        //Check Note App for below 
        const {title,vote_average,poster_path,overview} = movie;
        // without this destructuring the title,poster_path,etc wont be defined
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src= "${IMGPATH + poster_path}" alt = "${title}"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class = "${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class ="overview">
                <h4>Overview:</h4>
                ${overview}
            </div>
        `
        main.appendChild(movieEl);
    });
}

function getClassByRate(num){
    if(num >=8){
        return 'green';
    }else if(num >= 5){
        return 'orange';
    }else{
        return 'red';
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    searchTerm = input.value;

    if(searchTerm){
        getMovies(SEARCHAPI + searchTerm)

        input.value = '';
    }
})
