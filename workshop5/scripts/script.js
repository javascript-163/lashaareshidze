// 1. შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
 

let city = ["Tbilisi", "Rustavi", "Gori", "Kutaisi", "Ozurgeti", "Batumi", "Telavi", "Bolnisi", "Zugdidi", "Zestafoni"];

let everyThirdElement = [];

for (let i = 2; i < city.length; i += 3) {
    everyThirdElement.push(city[i]);    
}

console.log(everyThirdElement);



// 2. შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.


for (let i = 10; i >= 1; i--) {
    console.log(i);
}



// 3. მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.


let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

let nameBob = [];

let nameLeft = [];


for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Bob') {
        nameBob.push(names[i]);
    } else {
        nameLeft.push(names[i]);
    }
};


console.log(nameBob, nameLeft);





//=====================//

let personNames = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

let personNamesBob = personNames.filter(name => name === 'Bob');

console.log(personNamesBob);

let personNamesLeft = personNames.filter(name => name != 'Bob');

console.log(personNamesLeft);



    // 4. ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

    function calculatePower(number, power) {
        if (power === 0) {
            return 1;
        }
    
        let result = 1;
        for (let i = 0; i < power; i++) {
            result *= number;
        }
    
        return result;
    }
    

    let baseNumber = 5;
    let exponent = 3;
    let result = calculatePower(baseNumber, exponent);
    
    console.log(`${baseNumber}^${exponent} = ${result}`);




    ///  5. შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.  



    function fizzBuzz() {
        for (let i = 1; i <= 100; i++) {
            let output = '';
    
            if (i % 3 === 0) {
                output += 'Fizz';
            }
    
            if (i % 5 === 0) {
                output += 'Buzz';
            }
    
            console.log(`${i} ${output}`);
        }
    }
    
    fizzBuzz();
    
    
// 6. შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 



function factorialCalculator(number) {
    if (number < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    console.log(`${number}! = ${factorial}`);
}

// Example usage:
factorialCalculator(5);




// 7. შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.


let language = "javascript";
language = language.replace('j', 'J');
console.log(language);
