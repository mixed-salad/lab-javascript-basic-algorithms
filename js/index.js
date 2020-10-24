// Iteration 1: Names and Input
//1
const hacker1 = 'Axelle'

//1.2
console.log(`The driver's name is ${hacker1}`);

//1.3
const hacker2 = 'Elena';

//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  

// Iteration 3: Loops
let name = ''
for(let i = 0; i < hacker1.length; i++){
  name += `${hacker1[i]} `;
}
console.log(name.toUpperCase());

//3.2
let name2 = ''
for(let i = hacker2.length-1; i >= 0; i--) {
  name2 += hacker2[i];
}
console.log(name2);

//3.3
if (hacker1[0].localeCompare(hacker2)) {
  console.log(`The driver's name goes first.`)
} else if (hacker2[0].localeCompare(hacker1)) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}