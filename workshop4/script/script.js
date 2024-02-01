// ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა,იპოვეთ შეცდომა და გაასწორეთ იგი.

// let action = "move";

// switch (action) {
//     case "move":
//         alert("You're moving!")
//         break;
//     case "jump":
//         alert("You're jumping!")
//         break;
//     case "run":
//         alert("You're running!")
//         break;
//     default:
//         alert("Invalid action.");
// };


// switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.


// switch (vegetables) {
//     case "Carrot":
//         alert("Hello")
//         break;
//     case "Brocoli":
//         alert("Welcome")
//         break;
//     default:
//         alert("Neither")
// }
// ;


// შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.


// function checkAge() {

//     let age = prompt("შეიყვანეთ თქვენი ასაკი:");

//     if (age < 18) {
//         alert("თქვენ არ შეგძლიათ ხმის მიცემა.");
//     } else if (age = 18 ) {
//         alert ("თქვენ შეგძლიათ ხმის მიცემა.");
//     }
//     else {
//         alert ("თქვენ შეგძლიათ ხმის მიცემა.");
//     }
// }

// checkAge();



// შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.


// function checkPassword() {
//     let yourPassword = prompt("შეიყვანეთ თქვენი პაროლი!");

//     if (yourPassword.length < 3) {
//         alert("თქვენი პაროლი უვარგისია!");
//     } else if (yourPassword.length >= 3 && yourPassword.length <= 6) {
//         alert("თქვენი პაროლია სუსტია!");
//     } else if (yourPassword.length > 6 && yourPassword.length <= 8) {
//         alert("თქვენი პაროლია მისაღებია!");
//     } else if (yourPassword.length > 8 && yourPassword.length <= 16) {
//         alert("თქვენი პაროლია ძლიერია!");
//     } else if (/^\d+$/.test(yourPassword)) {
//         alert("თქვენი პაროლი უვარგისია რადგან შედგება მოხლოდ რიცხვებისაგან!");
//     } else {
//         alert("თქვენი პაროლი ძლიერია!");
//     }
// }

// checkPassword();





function runQuiz() {
    let correctAnswers = 0;
  
    let answer1 = prompt("1. რომელი წელია ახლა?");
    if (answer1 === "2024") {
      correctAnswers++;
    }
  
    let answer2 = prompt("2. რომელი ქვეყნის დედაქალაქია თბილისი?");
    if (answer2 === "საქართველო") {
      correctAnswers++;
    }
  
    let answer3 = prompt("3.რამდენია 2*2");
    if (answer3 === "4") {
      correctAnswers++;
    }
  
    let answer4 = prompt("4. როდის მოხდა დიდგორის ბრძოლა?");
    if (answer4 === "1121") {
      correctAnswers++;
    }
  
    let answer5 = prompt("5. ვინ დაწერა ვეფხისტყაოსანი");
    if (answer5 === "შოთამ") {
      correctAnswers++;
    }
  
    if (correctAnswers === 5) {
      alert("გილოცავთ! თქვენ სწორად უპასუხეთ 5-იდან 5!");
    } else {
      alert(`თქვენ სწორად უპასუხეთ ${correctAnswers} -ს 5-დან.`);
    }
  }
  

  runQuiz();
  