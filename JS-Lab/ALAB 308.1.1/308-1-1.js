// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
// console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) //0   EVEN % 2 = 0
    + (n2 % 2) //1  ODD % 2 = 1
    + (n3 % 2) //0 EVEN %2 = 0
    + (n4 % 2) //1 ODD %2 = 1
    >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

//                                              const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25; 
const isLess25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;



// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4; //TRUE

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isLess25 && isUnique;
//  TRUE && TRUE && TRUE && TRUE

// Finally, log the results.
console.log(isValid); //TRUE

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



/****************************************************************************************************************************************/

const isDiv5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0

/****************************************************************************************************************************************/

const isFirstLarger = (n1 > n4)

/****************************************************************************************************************************************/

let results = (n2 - n1)
results = (results * n3)
let remainder = (results % n4)

console.log('The remainder of the devision of the result by the fourth number is : ' + remainder)

/****************************************************************************************************************************************/
let money = 175
const distance = 1500
let gasPrice = 3
let slow = 55
let slowCon = 30
let med = 60
let medCon = 28
let high = 75
let highCon = 23
const gasbudget = (money / gasPrice)

let slowGasNeeded = (distance / slowCon)
console.log("we need " + slowGasNeeded + " galons of gas to cross a distance of " + distance + " Miles at " + slow + " mph ")
let medGasNeeded = (distance / medCon)
console.log("we need " + medGasNeeded + " galons of gas to cross a distance of " + distance + " Miles at " + med + " mph ")
let highGasNeeded = (distance / highCon)
console.log("we need " + highGasNeeded + " galons of gas to cross a distance of " + distance + " Miles at " + high + " mph ")

let slowCost = (slowGasNeeded * gasPrice)
let medCost = (medGasNeeded * gasPrice)
let highCost = (highGasNeeded * gasPrice)

if (slowCost <= money) {
    console.log("while going " + slow + " mph we will need " + slowCost + "$ which is within our budget of " + money + "$.")
}
else if (slowCost > money) {
    console.log("while going " + slow + " mph we will need " + slowCost + "$ which is out of our budget of " + money + "$.")
}
if (medCost <= money) {
    console.log("while going " + med + " mph we will need " + medCost + "$ which is within our budget of " + money + "$.")
}
else if (medCost > money) {
    console.log("while going " + med + " mph we will need " + medCost + "$ which is out of our budget of " + money + "$.")
}
if (highCost <= money) {
    console.log("while going " + high + " mph we will need " + highCost + "$ which is within our budget of " + money + "$.")
}
else if (highCost > money) {
    console.log("while going " + high + " mph we will need " + highCost + "$ which is out of our budget of " + money + "$.")
}

let slowTime = distance / slow
console.log(" if we are going " + slow + " mph we will arrive in " + slowTime + " hours")
let medTime = distance / med
console.log(" if we are going " + med + " mph we will arrive in " + medTime + " hours")
let highTime = distance / high
console.log(" if we are going " + high + " mph we will arrive in " + highTime + " hours")

// let isInBudget = (slowCost <= money)

// if (slowCost <= money) {
//     if (medCost <= money) {
//         if (highCost <= money) {
//             let isvalid1 = true
//         }
//         else {
//             let isvalid1 = false
//         }
//         let isvalid2 = true
//     }
//     else {
//         let isvalid2 = false
//     }
//     let isvalid3 = true
// }
// else {
//     let isvalid3 = false
// }

// If(isvalid1 == true)
// {
// slowTime

// }