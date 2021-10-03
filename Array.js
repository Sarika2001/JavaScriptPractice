const arr=[1,2,4,"Banana",true];
console.log(arr)

let m=new Array(1,2,3,"sa",false)
console.log(m)

console.log(arr.length)

console.log(Array.isArray(arr))
console.log(Array.isArray([1,2,3,"m"]))
console.log(Array.isArray("Sarika"))

console.log(arr.indexOf(4))

arr.push(78)        //Pushes element in last position
console.log(arr)

arr.unshift(56)         //Pushes in first position
console.log(arr)

arr.pop()   //Deletes last element

arr.shift() //Removes first element

console.log(arr)

arr.push(100,56,78) 

arr.splice(1,3)//Starts deleting elements from 1(including 1) & deletes next 3 elements
console.log(arr)

console.log(arr.reverse())

//arr=arr.concat(m)         //cannot assign to const so will give error

m=m.concat(arr)
console.log(m)