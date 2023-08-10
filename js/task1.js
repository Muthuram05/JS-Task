// 1.
list = [2, 10, 200, 54, 12, 45, 95, 1]
console.log(list.sort())

// 2.
Is_to_Was = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair"
console.log(Is_to_Was.replaceAll("was","is"))


// 3.
function convertTo7Digits(number) {
    return String(number).padStart(7, '0');
  }
console.log(convertTo7Digits(12)); 
// 4.



// 5.
function demo(name,...list){
    return `Hi ${name}, These are requested list: ${list} Thanks.`
}
console.log(demo("ram",1,2,3,4,5,6))

// 6.
let a = [ ["1", "a"], ["2", "b"], ["3","c"]] 
console.log(Object.fromEntries(a))
