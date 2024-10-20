function addNums(a,b){

 var c= a+b
console.log(c);
}
//console.log(c);
addNums(10,20)



const getAvg= function(m1,m2,m3)
{console.log(m1,m2,m3);

    const avg = (m1+m2+m3)/3
   // console.log(avg);
    return avg
}
getAvg(10,20)
const r = getAvg(10,20)
console.log(r);


//arrow function

const fact = (n) => 
{
    let f=1
    for(let i =1 ; i<=n; i++)
    {
        f*=i
    }
return f
}
const factorial =fact(5)
console.log(factorial);


//wa function to check if a number is prime or not

const prime = (n) =>
{
    t=true
    for(let i =2 ; i<=n/2;i++)
    {
        if(n%i==0)
        {
            t=false
        }
    }
    return t 
}
const m = prime(14000)
console.log(m);



//wap to  fibonacci series
let [a,b]=[0,1]
console.log(a);
console.log(b);
for(let)


