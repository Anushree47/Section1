const a=['abc', 1234, false,undefined]
console.log(a);
console.log(typeof a);
console.log(Array.isArray(a));

const b=1234
console.log(Array.isArray(b));

const movie =['Iron Man','Stree 2','Black Adam', 'harry Potter', 'Hawkeye']
//indexing
console.log(movie [3]);
console.log(movie.indexOf('Black Adam'));
console.log(movie[-1]);
console.log(movie.at(-4));
console.log(movie.at(3));
console.log(movie.at(-1));
movie[3]='HARRY POTTER'
console.log(a);
console.log(movie);

//slicing
console.log(movie.slice(1,4));
console.log(movie.slice(1,40));
console.log(movie.slice(1));
console.log(movie.slice(-3));


//adding and removing elements


movie.push('Thor'); //add at the end
console.log(movie);

movie.unshift('spiderman'); //add at start
console.log(movie);

movie.pop(); //remove last element
console.log(movie);

movie.shift(); // remove from start
console.log(movie);


movie.splice(2,2)  //remove two elements from index 2
console.log(movie);

movie.splice(2,2, 'Superman', 'FLASH','Arrow')
console.log(movie);

movie.splice(2,0,'superman','flash')
console.log(movie);


console.log(movie.length);










