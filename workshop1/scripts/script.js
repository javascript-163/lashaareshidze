let personFullName = prompt("შეიყვანეთ თქვენი სახელი და გვარი!");
let personBornYear = prompt("შეიყვანეთ თქვენი დაბადების წელი!");
let personLivingPlace = prompt("შეიყვანეთ თქვენი საცხოვრებელი ადგილი!");

let birthYear = parseInt(personBornYear);

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let alertMessage = `გამარჯობა, ${personFullName}! მიხარია, უკვე ${age} წლის ხარ და ცხოვრობ აქ, ${personLivingPlace}.`;

alert(alertMessage);