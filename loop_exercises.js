//wap to check  if a number is prime

const num = 30;
let prime = true;

for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
        console.log('not prime');
        prime = false;
        break;
    }
}

if (prime) {
    console.log('prime');
}


console.log('------------------------------------------');

//wap to print all numbers divisible 7 and 11 btw 100 and 200

for(let i=100;i<=500;i++)
{
    if(i%7==0 && i%11==0)
    {
        console.log(i);
        
    }
}

console.log('------------------------------------------');

//wap to print all perfect square numbers btw 1 to 100
for(let i=1;i<=100;i++)
{
    let r=i**0.5
    if(Number.isInteger(r))
    {
        console.log(i);
        
    }
}

console.log('------------------------------------------');
//wap to print all perfect square numbers btw 1 to 100
for(let i=1;i<=100;i++)
{
s=Math.sqrt(i)
    if(s==Math.floor(s))
    {
        console.log(i);
        
    }
}

console.log('------------------------------------------');