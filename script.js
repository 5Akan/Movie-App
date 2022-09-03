const APIKEY = '04c35731a5ee918f014970082a0088b1';
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';
const main = document.querySelector('main');
const form = document.querySelector('form');

getMovies();

async function getMovies(params) {
    const resp = await fetch(APIURL);

    const respData = await resp.json();

    respData.results.forEach(movie => {
        //Check Note App for below 
        const {title,vote_average,poster_path} = movie;
        // without this destructuring the title,poster_path,etc wont be defined
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src= "${IMGPATH + poster_path}" alt = "${title}"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class = "${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
        `
        main.appendChild(movieEl);
    });

    console.log(respData);
    return respData;
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

