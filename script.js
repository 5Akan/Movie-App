const APIKEY = '04c35731a5ee918f014970082a0088b1';
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';

async function getMovies(params) {
    const resp = await fetch(APIURL);

    const respData = await resp.json();
   

    console.log(respData);
    return respData;
}

getMovies();