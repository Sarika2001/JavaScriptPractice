let num=35;
let flag=0;
isPrime(num)
function isPrime(a)
{
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            flag=1;
            break;
        }
    }
    if(flag)//By default flag=1
    {
        console.log("Not Prime")
    }
    else
    {
        console.log("Prime")
    }
}