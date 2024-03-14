// 1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.


function findLongestWord(str) {

    const wordsArray = str.split(/\s+/);
  
    let longestWord = '';
    let maxLength = 0;
  
    for (let word of wordsArray) {
      const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '');
  
    
      if (cleanedWord.length > maxLength) {
        maxLength = cleanedWord.length;
        longestWord = cleanedWord;
      }
    }
  
  
    return longestWord;
  }
  
  let anyString = "Lorem ipsum dolor sit amet consectetur, adipnnnnisicing elit. Soluta quod adipisci vero id sint delectus voluptates dolore vitae dicta, ut, nulla eaque. Quibusdam, qui corporis. Similique, a1233321212121tque. Quisquam, esse? Odio.";
  console.log(findLongestWord(anyString)); 
  




// 2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.


const calculator = {
    num1: 0,
    num2: 0,

    setNumbers: function(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    },
  
 
    add: function() {
      return this.num1 + this.num2;
    },

    subtract: function() {
      return this.num1 - this.num2;
    },
  
    multiply: function() {
      return this.num1 * this.num2;
    },
  
    divide: function() {
      if (this.num2 !== 0) {
        return this.num1 / this.num2;
      } else {
        return "Cannot divide by zero!";
      }
    }
  };
  
  
  calculator.setNumbers(10, 5);
  console.log("Addition:", calculator.add());
  console.log("Subtraction:", calculator.subtract());
  console.log("Multiplication:", calculator.multiply());
  console.log("Division:", calculator.divide());
  

// 3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.



// Function call
exampleFunction();

// Function definition
function exampleFunction() {
  console.log("This is an example function.");
}
