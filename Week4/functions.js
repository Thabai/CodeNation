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
// const addUser = (username) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             users.push(username)

//             let error = false

//             if(!error){
//                 resolve()
//             } else {
//                 reject('there is an error')
//             }
//         },2000)

//     })
// }
// addUser('charlie')
// .then(getUsers)
// .catch((err) => {console.log(err)})


