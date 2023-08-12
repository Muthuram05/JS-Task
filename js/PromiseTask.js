const fetch = require("node-fetch");

class Async{  
    async all(...data) {
        let resolve = []
        for (let x of data[0]) {
            try {
                let response = await fetch(x);
                let result = await response.json()
                resolve.push(result)
            } catch (error) {
                throw error
            }
        }
        return resolve
    }
    async any(...data) {
        let reject = []
        for (let x of data[0]) {
            try {
                let response = await fetch(x);
                let result = await response.json()
                return result
            } catch (error) {
                reject.push(error)
            }
        }
        if(data[0].length === reject.length)
            return "All promises were rejected" + "\n"+ reject
    }
    async race(...data) {
        for (let x of data[0]) {
            try {
                let response = await fetch(x);
                let result = await response.json()
                return result
            } catch (error) {
                throw error
            }
        }
    }
    async allsettled(...data) {
        let resolve = []
        for (let x of data[0]) {
            try {
                let response = await fetch(x);
                let result = await response.json()
                resolve.push("fulfilled")
            } catch (error) {
                resolve.push("rejected")
            }
        }
        return resolve
    }
}

let obj = new Async()

const promises = [
   'https://jsonplaceholder.typicode.com/todos/1',
   'https://jsonplaceholder.typicode.com/todos/2',
   'https://jsonplaceholder.typicode.com/todos/3'
]; 

obj.race(promises)
    .then(data => console.log(data))
    .catch((err) =>{
        console.log("from catch")
        console.log(err)
    }) 
