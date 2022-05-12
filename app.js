for (let i = 1; i <= 20 ; i++){
    console.log(i);
} // easy going

for (let i = 0; i <= 200; i+=2){
    console.log(i);
} // get even

for (let i = 1; i <= 20 ; i++){
    console.log("Love me, pet me! HSSSSS!");
} 

for (let i = 0; i < Math.floor(Math.random() * 200) i+=2){
    Math.random(i);
    console.log("...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." );
} //excited kittens answered

for (number = 1; number <= 100; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("Fizz");
	}
    else if (number % 5 == 0) {
        console.log("Buzz");	
	}
    else if (number % (3 && number % 5) == 0) {
        console.log("FizzBuzz");
	}
    else {
    	console.log(number);
	} 
} //Fizz Buzz answered

kenny[0] = 'Gameboy';
jimClark[1] += 1;
ryan[2] = 'Gotham City';
reuben.splice(2,1,'Chicago');
jimHaff.splice(2,1,'New York', 'Austin', 'Nashville');
jimHaff.splice(2,1);
//Getting to know you answered

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
let turtles = [];
for (let i = 0; i < ninjaTurtles.length; i++) {
  let turtles = '';
  for (let j = 0; j < ninjaTurtles[i].length; j++) {
    if (j % 2 === 0){
        turtles += ninjaTurtles[i][j].toUpperCase();
    } else {
        turtles += ninjaTurtles[i][j]
    }
  }
  turtles.push(turtles);
  turtles = ''; //?? Yell at the Ninjas

     const kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0, 1);
thomsCloset[2].push(kristynsShoe);
function dressKristyn(arr){
  let randomOutfit = [];
  while (randomOutfit.length < 3){
    let randomIndex = Math.floor(Math.random()* arr.length);
    if (!randomOutfit.includes(arr[randomIndex])){
      randomOutfit.push(arr[randomIndex]);
    }
  }
  console.log(`Today, Kristyn will be wearing ${randomOutfit[0]}, ${randomOutfit[1]}, and ${randomOutfit[2]}.`)
}
function dressThom(arr){
  let randomShirt = thomsCloset[0][Math.floor(Math.random() * thomsCloset[0].length)]
  let randomPants = thomsCloset[1][Math.floor(Math.random() * thomsCloset[1].length)]
  let randomAccessory = thomsCloset[2][Math.floor(Math.random() * thomsCloset[2].length)]
  console.log(`Today Thom will be wearing ${randomShirt}, ${randomPants}, ${randomAccessory}.`)
}
dressKristyn(kristynsCloset);
dressKristyn(kristynsCloset);
dressKristyn(kristynsCloset);
dressThom(thomsCloset);
dressThom(thomsCloset);
dressThom(thomsCloset);
// I loops through their closets

let sum = 0
for (let i = 0; i < 1000; i++) {
  if(i%3===0 || i%5===0){
    sum+= i;
  }
}
console.log(sum); //Project Euler Problem 1 answered