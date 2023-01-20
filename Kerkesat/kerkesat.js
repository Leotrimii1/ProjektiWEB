
function funksioniPerDemo() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "nuk jo numer";
    x = Number(x);
    if (x < 5) throw "numer shume i vogel";
    if (x > 10) throw "numrer shume i madh";
  }
  catch (err) {
    message.innerHTML = "Inputi eshte " + err;
  }
}



function valForm() {
  let x = document.forms["myForm"].fname.value;
  if (x == "") {
    alert("Emri duhet mbushur");
    return false;
  }
}

// it's all in english now
function valForm2() {

  let x = document.forms["myForm2"]
  let name = x.fname2.value
  let password = x.fpassword2.value

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}

function valForm3() {
  let myForm3 = document["myForm3"]
  let emailID = myForm3.EMail.value;
  let name = myForm3.Name.value;
  let zip = myForm3.Zip.value;
  let selectV = myForm3.Country.value
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if (atpos < 1 || (dotpos - atpos < 2)) {
    alert("Please enter correct email ID")
    myForm3.EMail.focus();
    return false;
  } else if (name == null || name == "") {
    alert("Name can't be blank");
    myForm3.Name.focus();
    return false;
  } else if (zip == null || zip == "") {
    alert("Zip can't be blank");
    myForm3.Zip.focus();
    return false;
  } else if (selectV == -1) {
    alert("Choose a country. Right Now.");
    myForm3.Country.focus();
    return false;
  }
}


function shuma(nArray) {
  let sum = 0;
  for (let i = 0; i < nArray.length; i++) {
    sum += nArray[i];
  }
  return sum;
}

function factorial(n) {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

let walk = false;
function walking() {
  walk = true;
  if (not(run)) {
    for (let step = 0; step < 5; step++) {
      console.log('Walking one more step');
    }
  }
  walk = false;
}

let run = false;
function running() {
  run = true;
  if (not(walk)) {
    for (let step = 0; step < 5; step++) {
      console.log('Running one more step');
    }
  }
  run = false;
}

function aWhileLoop() {
  let i = 0;
  do {
    i += 1;
    console.log(i);
  } while (i < 5);

}

class Person {
  constructor(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  show() {
    console.alert(this.firstName + " " + this.lastName);
  }
}

class animal {
  constructor(species, weight) {
    this.species = species;
    this.weight = weight;
  }
}

class car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
}

let myCat = new animal("feline", 5);

let newPerson = new Person("FirstName", "LastName", 25, "red")

let aCar = new car("BMW", 130);



$("#fadein").click(function () {
  $("#div1").fadeIn("slow");
});

$("#fadeout").click(function () {
  $("#div1").fadeOut("slow");
});

$("#fadeto").click(function () {
  $("#div1").fadeTo("slow", 0.2);
});

$("#original").click(function () {
  $("#div1").fadeTo("slow", 1);
});


const students = [
  { id: 1, name: 'Student 1' },
  { id: 2, name: 'Student 2' },
  { id: 10, name: 'Student 3' },
  { id: 100, name: 'Student 4' },
  { id: 200, name: 'Student 5' },
  { id: 300, name: 'Student 10' }
];

let sIDs = students.map(function (std) {
  return std.id
});

let sNames = students.map(function (std) {
  return std.name
});

const market = [
  {
    id: 1,
    name: "item 1",
    price: 14,
    category: "Electronics"
  },
  {
    id: 2,
    name: "item 2",
    price: 30,
    category: "Food"
  },
  {
    id: 100,
    name: "item 3",
    price: 16,
    category: "Drink"
  },
  {
    id: 151,
    name: "item 4",
    price: 22,
    category: "Misc"
  }
];

let sumPrices = market.reduce(function (baseSum, v) {
  return baseSum + v.price;
}, 0)

let miscItems = market.filter(function (v) {
  return v.category === "Misc";
});

setTimeout(function () {
  sumPrices += 200;
}, 2000)

function somethingDisplay(some) {
  document.getElementById("somethingDisplay").innerHTML = some;
}

function myCalculator() {
  let x = Math.floor(Math.random() * 8)
  let y;
  switch (x) {
    case 1:
      y = Math.E;
      break;
    case 2:
      y = Math.PI;
      break;
    case 3:
      y = Math.SQRT2;
      break;
    case 4:
      y = Math.SQRT1_2;
      break;
    case 5:
      y = Math.LN2;
      break;
    case 6:
      y = Math.LN10;
      break;
    case 7:
      y = Math.LOG2E;
      break;
    case 8:
      y = Math.LOG10E;
      break;
    default:
    y = 1;
  }

  return y;
}

somethingDisplay(myCalculator());

let today = new Date();
let todayString = today.toString();
document.getElementById("curDate").innerHTML = todayString;

$( "#animateBtn" ).click(function() {
  $( "#div2" ).animate({
    opacity: "toggle",
    left: "+=50",
    height: "toggle"
  }, 2000, function() {

  });
});

$("#div2").mouseenter(function(){
  $("#div2").animate({
    backgroundColor: "#0000ff",
    color: "#00f",
    width: 500
  }, 1000, function() {
    });
});

$("#div2").mouseleave(function(){
  $("#div2").animate({
    backgroundColor: "#ff0000",
    color: "#f00",
    width: 50
  }, 1000, function() {
    });
});

$("#remove").remove();
