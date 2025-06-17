let n=process.argv[2];

for(let i=1;i<=n;i++)
{
    let str='';
    if(i%3==0)
    {
        str+='fizz';
    }
     if(i%5==0)
    {
        str+='buzz';
    }
    if(str=='')
    console.log(i);
    else
    console.log(str);
}
