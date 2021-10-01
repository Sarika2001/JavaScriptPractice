let a="abcbamn"
let m=""
for(i=a.length-1;i>=0;i--)
{
    m=m.concat(a[i])   
}
if(m==a)
{
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}