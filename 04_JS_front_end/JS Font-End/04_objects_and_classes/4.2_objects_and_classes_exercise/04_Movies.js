function movies(moviesData) {
    let movies = [];

    for (let line of moviesData) {
        let currMovie = {};

        if (line.includes('addMovie')) {
            let movieName = line.replace('addMovie', '').trim();
            currMovie.name = movieName;
            movies.push(currMovie);
        }
        else if (line.includes('directedBy')) {
            let tokens = line.replace('directedBy', '-');
            let [movieName, director] = tokens.split(' - ');
            
            let movie = movies.find((mov) => mov.name === movieName);
            
            if (movie) {
                movie.director = director;
            }
        }
        else if (line.includes('onDate')) {
            let tokens = line.replace('onDate', '-');
            let [movieName, date] = tokens.split(' - ');
            
            let movie = movies.find((mov) => mov.name === movieName);
            
            if (movie) {
                movie.date = date;
            }
        }
    }
    
    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);

// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);