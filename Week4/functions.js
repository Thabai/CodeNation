let users = ['dan', 'ben', 'stuart']

// const addUser = (username, callback) => {
//     setTimeout(() => {
//         users.push(username)
//         callback()
//     }, 2000)
// }

const getUsers = () => {
    setTimeout(() => {
        console.log(users)
}, 1000)
}

// addUser('charlie', getUsers)

//promise
const addUser = (username) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            users.push(username)

            let error = false

            if(!error){
                resolve()
            } else {
                reject('there is an error')
            }
        },2000)

    })
}
addUser('charlie')
.then(getUsers)
.catch((err) => {console.log(err)})


let movies = ["Chopper", "ID", "Scum", "12 Hour Shift"];
const removeMovie = () =>{
    movies.pop(movies);
    console.log(movies);
    return movies;
}
console.log(movies);
removeMovie();
let movieToAdd = "The Lost Boys";
    const addMovie = () =>{
        movies.push(movieToAdd);
        console.log(movies)
        setTimeout(() => {
            console.log(movies);
        }, 3000);
        removeMovie("Chopper");
        console.log(movies);
    }
addMovie();