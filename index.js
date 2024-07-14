import readline from "readline";

const fizz = 3;
const buzz = 5;

function run(num) {
  if (num % fizz === 0 && num % buzz === 0) {
    return "fizzbuzz";
  } else if (num % fizz === 0) {
    return "fizz";
  } else if (num % buzz === 0) {
    return "buzz";
  }

  return num;
}

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Number: ", (num) => {
  console.log(run(num));
  input.close();
});
