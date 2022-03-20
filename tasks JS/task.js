
console.log("========================= Задача 1 ============================== ")

const string = "Привет! Как дела?";
const letters = "аущыиэяюёе"

function getVowels(string){
    let letter = ""
    for(let i = 0; i < string.length; i++){
        if(letters.indexOf(string[i].toLowerCase()) > -1){
            letter += string[i].toLowerCase()
        }
    }
    return letter
}
console.log(getVowels(string))

console.log("========================= Задача 2 ============================== ")

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

const salary = 1000

function getWorthyWorkers(workers){
    let worker = []
    for(let i = 0; i < workers.length; i++){
        if(workers[i].salary > salary){
            worker.push(workers[i].name)
        }
    }

    return worker
}

console.log(getWorthyWorkers(workers))

console.log("========================= Задача 3 ============================== ")

const path = "/users/download/index.html"

function isHtml(path){
    if(path.indexOf(".html") !== -1){
        return true
    }
}

console.log(isHtml(path))

console.log("========================= Задача 4 ============================== ")

const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => num % 2;

function filterArray(mixedArray, isEven){
    let arr =[]

    for (let i = 0; i < mixedArray.length; i++){
        if(isEven(mixedArray[i]) === 0){
            arr.push(mixedArray[i])
        }
    }
    return arr
}

console.log(filterArray(mixedArray, isEven));
