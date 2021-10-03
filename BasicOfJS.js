//let -> local variable of particular block level scope
var city="Mumbai"
{
    let city="Delhi"
    console.log(city)
}
console.log(city)
//const -> with constant value
//In case of array you can modify elements of array , push new elements even if it is const
//You just cant redefine it again

const arr1=[1,2,3,4]

//const arr1=[10,20,30,40]   like this
arr1[2]=90
arr1.push(23)
console.log(arr1)

//Data types
//Primitive datatype: string num bool null undefined symbol
//Reference datatype: arrays object functions dates

//ObjectLiteral:
let marks={
    "sarika shete":67,
    dhanu:78,
    kadu:70
}
console.log(marks)

let date=new Date()
date.getUTCDate
console.log(date)

//data type conversion
let a=true
a=String(a)
console.log(a,typeof(a))

let m="123d56"
m=Number(m)
console.log(m)  //NaN as d has no replacement in numbers

let s=parseInt(98.6781)     //Integer value
s=parseFloat(98.567345678)        //Float value
s=s.toFixed(4)                  //Will show only 4 digits after decimal point
console.log(s)

//Data Coercion
mystr="678"
mynum=67
console.log(mystr+mynum)

//About String 
a="Hello"
b="Sarika"
console.log(a+" "+b)
a=a.concat(" "+b)
console.log(a)
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(a.length)
console.log(a[1])//index starts with 0
console.log(a.indexOf("Sarika"))//Returns -1 if string is not present
console.log(a.lastIndexOf("a"))
console.log(a.charAt(4))
console.log(a.endsWith("a"))
console.log(a.includes("m"))
console.log(a.substring(0,7))//Does not include 7
console.log(a.slice(-4))//last 4 letters
console.log(a.slice(0,4))
console.log(a.split("a")) //All elements in array
console.log(a.replace("a","r"))//replaces only first occurence


