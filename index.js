//Cpoying example as stated from codesandbox

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;


//isOver25 should not negate so modifying that name
const isUnder25=n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`The answer to are all numbers ${n1},${n2},${n3} and ${n4} under 25 is ${isUnder25}`)


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnder25;

// Finally, log the results.
console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//To check if all numbers are divisible by 5
  const isDivisibleBy5= (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
  console.log(`The answer for four numbers ${n1},${n2},${n3} and ${n4} divisble by 5 is ${isDivisibleBy5}`)

//Check if first number is larger than the second
const isfirstgreater= n1>n2
console.log(`The answer for is first number ${n1} greater than ${n2} is ${isfirstgreater}`)

//Accomplish arithmatic chain finding remainder
let num=n1-n2
let sum=num*n3
let rem=sum%n4
console.log(`The remainder is ${rem}`)


//PART2

const totalDistance=1500
const fuelBudget=175
let fuelcost=3
let milespergallon1=30
let milespergallon2=28
let milespergallon3=23

// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
//Calculate fuel required TotalDistance/Milesp per gallon

let totalFuel55MilesPerHour=totalDistance/milespergallon1
let totalFuel60MilesPerHour=totalDistance/milespergallon2
let totalFuel75MilesPerHour=totalDistance/milespergallon3

console.log(`Gallons of fuel needed if you drive at 55 miles per hour :${totalFuel55MilesPerHour.toFixed(2)}gallons\n,Gallons of fuel needed if you drive at 60 miles per hour :${totalFuel60MilesPerHour.toFixed(2)}gallons\n,Gallons of fuel required if you drive at 75 miles per hour: ${totalFuel75MilesPerHour.toFixed(2)}gallons`)

//Is the fuel budget enough for the trip
//First calculating the Total cost of fuel as per miles

//AT 55 miles cost of fuel would be 
//Fuelrequiredat mile per hour * Fuel cost per gallon
let fuelCostAt55=totalFuel55MilesPerHour*fuelcost

//At 60 miles cost of fuel would be 
let fuelCostAt60=totalFuel60MilesPerHour*fuelcost
console.log(fuelCostAt60)

//At 75 miles cost of fuel would be 
let fuelCostAt75=totalFuel75MilesPerHour*fuelcost
console.log(fuelCostAt75)

const isBudgetEnough= fuelCostAt55<=fuelBudget && fuelCostAt60<=fuelBudget && fuelCostAt75<=fuelBudget
console.log(`Considering vehicle speed to be 55 miles per hour the fuel cost is:${fuelCostAt55.toFixed(2)}$ and is budget enough is :${fuelCostAt55<=fuelBudget}\nConsidering vehicle speed to be 60 miles per hour the fuel cost is:${fuelCostAt60.toFixed(2)}$ and is budget enough is :${fuelCostAt60<=fuelBudget}\nConsidering vehicle speed to be 75 miles per hour the fuel cost is:${fuelCostAt75.toFixed(2)}$ and is budget enough is :${fuelCostAt75<=fuelBudget}\nConsidering all the three speeds the answer to is budget enough is ${isBudgetEnough}`)

//How long the trip will take in hours

//This can have 3 answers depending on the speed you are driving 
//First consider 55 
//Time=DIstance/Speed
const timeAt55=totalDistance/55


//Time at 60
const timeAt60=totalDistance/60

//Time at 75
const timeAt75=totalDistance/75

console.log(`Time required if you drive at 55 miles per hour would be: ${timeAt55.toFixed(2)} hours \nTime required if you drive at 60 miles per hour would be: ${timeAt60.toFixed(2)} hours \nTime required if you drive at 75 miles per hour would be: ${timeAt75.toFixed(2)} hours`)

//Looking at all the statistics above driving at 60 speed is most suitable so that fuel cost is in budget within 175 that is 160 and time is 25 hours

//PART 3 Can use if else statment in future letting the user put in some input 

console.log(`It is best to drive at 60mph so that you spend ${fuelCostAt60} and reach your within ${timeAt60} hours`)