//Scope 
//VAR:
var i=11;
console.log(`outside ${i}`)//11
function scope_test()
{
    var i=90;//But if I write i=45 and skip var then it will change the value of global variable
    console.log(`Inside ${i}`)//90
}
scope_test()
console.log(`outside ${i}`)//11

//LET:
let m=110;
console.log(`outside ${m}`)//110
function scope_test()
{
    let m=900;//But if I write m=45 and skip var then it will change the value of global variable
    console.log(`Inside ${m}`)//900
}
scope_test()
console.log(`outside ${m}`)//110

//-----------------------let vs var------------------------//
if(true)
{
    var i=12345678;//var will act as global var -- global scope
}
console.log(i)

if(true)
{
    let k=12345678;//let & const has block level scope
}
console.log(k)//will give error as k is not defined
