age=90;
console.log(age<80?'Age greater than 80':'Age smaller than 80') //Ternamry operator
let j=1;
while(j<5)
{
    console.log(j)
    j++
}

let arr=[2,3,4,5,6,7,8,0]
arr.forEach(function(element)
{
    console.log(Math.pow(element,3))
})

arr.forEach(function(element,index,arr)// Will print element with index & array
                                       // Index & arrays are optional
{
    console.log(element,index,arr)
})

let obj={
    name:"A",
    email:"b",
    age:45
}

for(k in obj)
{
    console.log(`${k} pf object is ${obj[k]}`) //k will gives key value & obj[k] gives values
}

function add(a=0,b=0)//default values for a & b// So you will not get undefined value for add()
{
    return a+b;
}
let ans=add(9,7)
console.log(ans)

let ans2=add()  //Ans= 0
console.log(ans)

//Function in a variable
const greet=function(name="Visitor"){//Whatever return by function is stored in const greet
                                   //Default name is visitor
    msg=`Hello ${name}`
    return msg
}

console.log(greet("Sarika"))

//Function inside object

const myObj={
    name:"Sarika",
    game:function()
    {
        return "GTA"
    }
}
console.log(myObj.game())

arr.forEach(function(element,index,array)
{
    console.log(index,element,array)
})

//Scope 
//let & const have block level scope
let i=11;
console.log(`outside ${i}`)
function scope_test()
{
    let i=90;
    console.log(`Inside ${i}`)
}
scope_test()

//2.
let j=11;
console.log(`outside ${j}`)
function scope_test2()
{
    let j=90;   //Error that it has been already declared

    console.log(`Inside ${j}`)
}
scope_test2()