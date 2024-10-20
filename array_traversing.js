const n=[2,3,4,5,6,7,8,9,11,22,34]
console.log(n.length);

for(let i=0;i<n.length;i++)
{
    console.log(n[i]);
}

console.log('------------------------------------------');

for(let m of n)
{
console.log(m);
}

console.log('-------------------------------');

n.forEach((a) => {
console.log(a);
});


console.log('-------------------------------');

n.forEach((a,b) => {
console.log(a,b);
});



console.log('-------------------------------');

n.forEach((a,b,c) => {
console.log(a,b,c);


});


console.log('-------------------------------');

n.forEach((a,b,c,d) => {
console.log(a,b,c,d);
});

console.log('______________');

console.log('------------------------------------------');
//print square of all elemets
n.forEach((a) => 
{console.log(a**2);

})

console.log('------------------------------------------');
//store  square all element in a new array

const s=[]
n.forEach((n) =>
{
    s.push(n**2);
    
})
console.log(s);

console.log('------------------------------------------');

//store all even number in a new array

const b=[]
n.forEach((n) =>
{
    if(n%2===0)
        b.push(n)
})
console.log(b);

    //add 18% gst to all prices AND store  in new array
    const prices=[340,670,499,384,2944]
    const c=[]
    prices.forEach((v) =>
    {
        c.push(v+(v*0.18))
    })

    c.forEach((v) =>
        {
            console.log(v);
        })


    