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
let name = '';
for(let i = 0; i < hacker1.length; i++){
  name += `${hacker1[i]} `;
}
console.log(name.toUpperCase());

//3.2
let name2 = '';
for(let i = hacker2.length-1; i >= 0; i--) {
  name2 += hacker2[i];
}
console.log(name2);

//3.3
let comparison = hacker1.localeCompare(hacker2);
    switch (comparison) {
    case -1:
        console.log(`The driver’s name goes first.`);
        break;
    case 1:
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    default:
        console.log(`What?! You both have the same name?`);
        break;
    }

//bonus #1
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor sollicitudin mattis. Praesent viverra, nisi a lobortis finibus, tortor justo ultrices purus, ut placerat ipsum sem eu nibh. Maecenas consequat ex lacus, volutpat cursus quam molestie ac. Cras interdum libero dui, ac pulvinar justo luctus in. Phasellus euismod euismod lacus, eget varius ipsum tincidunt id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a sodales leo, ut accumsan elit. Proin volutpat neque in urna vehicula, vel pulvinar dolor porta. Sed velit ipsum, sollicitudin in rhoncus et, tincidunt in mi. Quisque sit amet scelerisque magna. Duis elementum tempor tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam at orci faucibus, consequat elit ac, mollis dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non diam porta, iaculis nisl accumsan, maximus quam.

Vivamus aliquet, nunc quis dictum luctus, odio magna pellentesque dui, id dignissim lorem enim at eros. Sed viverra est at mauris imperdiet dictum. Donec pellentesque odio vel urna maximus accumsan. Nullam volutpat nisl sit amet risus dictum rhoncus. Ut a iaculis lectus, ut mattis orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non tellus eget ex vulputate sodales et quis ligula. Nulla ac felis in nulla tempus condimentum. Maecenas posuere, turpis et cursus pulvinar, lectus leo fringilla lorem, nec consectetur libero ante ac neque. Suspendisse maximus libero eget mauris bibendum malesuada.

Donec nec turpis augue. Ut ut metus pulvinar, tincidunt enim sit amet, volutpat urna. Pellentesque lacinia auctor leo, vitae lobortis purus molestie in. Proin maximus lobortis neque id aliquet. Nam auctor rutrum euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed tincidunt molestie eros, at laoreet neque auctor sed. Sed quis orci massa. Donec eleifend fermentum ante ut maximus. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam cursus orci at leo eleifend maximus. Ut vitae magna nec tellus imperdiet tempor.
`;


function wordCount(text) {
  text = text.replace(/(^\s*)|(\s*$)/gi, '');
  text = text.replace(/[ ]{2,}/gi, ' ');
  text = text.replace(/\n /, '\n');
  text = text.split(' ');
  return text.length;
}

console.log(wordCount(text));
const searchWord = /et/gi;
console.log(text.match(searchWord).length);

//Bonus #2
let parseToCheck = "A man, a plan, a canal, Panama!";

function checkPalindrome(sentense) {
  sentense = sentense.replace(/\W/gi, '');
  let reverseWord = '';
  for(let i = sentense.length-1; i >= 0; i--){
    reverseWord += sentense[i];
  }
  return sentense.toLowerCase === reverseWord.toLowerCase;
}

checkPalindrome(parseToCheck);