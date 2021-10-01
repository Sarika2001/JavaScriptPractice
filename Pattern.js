let a="MSDHONI"
let k=2
for(i=0;i<a.length*2-1;i++)//4
{
    if(i<a.length)
    {
    for(j=0;j<=i;j++)
    {
        console.log(a[j]);
    }
    }
    else
    {
        for(j=0;j<=a.length-k;j++)
        {
            console.log(a[j]);
        }
        k++
    }
    console.log("\n")
}
