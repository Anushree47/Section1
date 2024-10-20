for(let i =0; i<10 ; i++)
{
    console.log(i);
    
}
console.log('------------------------------------------');


//wap to rint all even number btw 50 to 100
for(let i= 50 ; i<=100; i++)
    if(i%2=== 0)
    {
        console.log(i);        
    }
console.log('------------------------------------------');
    //while loop
    console.log("while loop");
    let a=10
    while(a<20)
    {
        console.log(a);
    a++
    }
    console.log('------------------------------------------');
    //do while loop
    console.log(" do while loop");
    let m=20;
    do{
        console.log(m);
    }while(m<20);
    console.log('------------------------------------------');

// WAP to print Fibonacci series
let [c, b] = [0, 1];
console.log(c);
console.log(b);

for (let i = 0; i < 8; i++) {
    let d = a + b;
    console.log(d);
    [c, b] = [b, d];
}
console.log('------------------------------------------');
// WAP to reverse a number.
let num = 87624;
let reverse = 0;

while (num > 0) {
    console.log(num, reverse);
    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num / 10);
}
console.log(num, reverse);


console.log('------------------------------------------');
