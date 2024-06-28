var num1, num2;

if (parseInt(num1, 10) > parseInt(num2, 10)) {
   console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
   console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
   console.log("The values " + num1 + " and " + num2 + " are equal.");
}
console.log('-----------------------------------------') 

var x = 3;
var y = -7;
var z = 2;
if (x > 0 && y > 0 && z > 0) {
   alert("The sign is +");
}
else if (x < 0 && y < 0 && z < 0) {
   console.log("The sign is -");
}
else if (x > 0 && y < 0 && z < 0) {
   console.log("The sign is +");
}
else if (x < 0 && y > 0 && z < 0) {
   console.log("The sign is +");
}
else {
   console.log("The sign is -");
}
console.log('-----------------------------------------')

var x = 0;
var y = -1;
var z = 4;

if (x > y && x > z) {
   if (y > z) {
      console.log(x + ", " + y + ", " + z);
   } else {
      console.log(x + ", " + z + ", " + y);
   }
} else if (y > x && y > z) {
   if (x > z) {
      console.log(y + ", " + x + ", " + z);
   } else {
      console.log(y + ", " + z + ", " + x);
   }
} else if (z > x && z > y) {
   if (x > y) {
      console.log(z + ", " + x + ", " + y);
   } else {
      console.log(z + ", " + y + ", " + x);
   }
} 
console.log('-----------------------------------------')

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var f = -1;


if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > c && d > b && d > f) {
    console.log(d);
} else {
    console.log(f);
} 

console.log('-----------------------------------------')


for (var x = 0; x <= 15; x++) {
   
   if (x === 0) {
       console.log(x + " is even");
   }
   
   else if (x % 2 === 0) {
       console.log(x + " is even");
   }
   
   else {
       console.log(x + " is odd");
   }
} 

console.log('-----------------------------------------')

for (let num =1; num <= 100; num++) {
   if (num %3 ==0 ) {console.log (num + ' Fizz') }
   if (num %5 ==0) {console.log (num + ' Buzz')}
   if (num %3 ==0 && num %5 ==0 ) {console.log ( num + ' Fizz Buzz')} 
   if (num %3 !==0 && num %5 !==0 ) {console.log (num)}
}

console.log('-----------------------------------------')


var x, y, chr;


for (x = 1; x <= 6; x++) {
  
    for (y = 1; y < x; y++) {
     
        chr = chr + ("*");
    }

    
    console.log(chr);

    chr = '';
} 

console.log('-----------------------------------------')

