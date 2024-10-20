//WAP TO chek number is even or odd
const nm=12346776;
if(nm%2==0)
{
p=12;
        //const pi=3.14;
        pi= 3.1125;
    console.log('even');
}
else{
console.log('odd');
}
console.log(p);
console.log(pi);




console.log('------------------------------------------');


//wap to check if a person is eligible for dln

const  age=11;
if(age>=18)
{
console.log("Eligible for DL");
}
else
{
console.log("not Eligible for DL");
}


console.log('------------------------------------------');
//wap to print grade on the basis of marks

marks=0;
if(marks  >=85 && marks<=100)
{
    console.log("A grade");
    
}
else{
    if(marks >=70 && marks <=85)
    {
        console.log("B grade");
        
    }
    else
    {
        if(marks <=55 && marks>= 70)
        {
            console.log("C grade");
        }
        else
        {
            console.log("D grade");
            
        }
    }
}

console.log('------------------------------------------');

//wap to print if number is perfect square

 n=64;
m= Math.sqrt(n)
console.log(m);
if(Number.isInteger (m))
{
    console.log("perfect square");
}
else
{
    console.log(" not perfect square");
    }

    console.log('------------------------------------------');
// WAP to check if number is a perfect square
const no = 27;
const r = no ** 0.5;

console.log(r);

if (Number.isInteger(r)) {
    console.log('Perfect Square');
} else {
    console.log('Not a perfect square');
}

console.log('------------------------------------------');

//wap to check if number  divisible by 7 and 11 both

n=77;
if(n%7==0 && n%11==0)
{
    console.log("Number is divisble by both 7 and 11");
}
else
{
    console.log("Number is not divisble by both 7 and 11");
    
}

console.log('------------------------------------------');