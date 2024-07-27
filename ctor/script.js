function Movie(title, director, releaseYear, genre, baxmishammi, rating) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.baxmishammi = baxmishammi;
    this.rating = rating;
    this.getInfo=function () {
        console.log(`today I watched ${title} movie, director is ${director}, it release year is ${releaseYear} and I rated it ${rating} points`);
    }
}


const movieOne = new Movie("John Wick 4", "Alberto Roberto", 2021, "Action", true, 10)
const movieTwo = new Movie("The 100", "Jack Winston", 2014, "Action and horror", true, 9)
// const movieTwo = new Movie("The 100", "Jack Winston", 2014, "Action and horror", true , 9)
movieOne.getInfo();