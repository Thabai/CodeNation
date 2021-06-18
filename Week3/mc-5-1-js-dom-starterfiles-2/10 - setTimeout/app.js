function say(something) {
    console.log(something);
}
function exec (func,arg){
    func(arg);
}
exec(say, "Hi, there");


function exec (func,arg){
    func(arg);
}
exec (function say(something) {
    console.log(something);
}, "Hi,there");


function exec(func,arg){
    func(arg);
}
exec((something) =>{
    console.log(something);
}, "Hi,there");


window.setTimeout((something)=> {
    console.log(something);
}, 5000, "Greetings Everyone");