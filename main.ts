import inquirer from "inquirer";

const count : {
    sentence: string
} = await inquirer.prompt(
    
    [
        {
            name: "sentence",
            type: "input",
            message: "Enter your sentence to count word:"
        }
    ]
) 

let words = count.sentence.trim().split(" ")
console.log(words)
console.log(`Your sentence has ${words.length} words`);
