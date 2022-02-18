// знакомство с объектами 

var carMazda = {
    make: "Mazda",
    model: 929,
    year: 1991,
    color: "blue",
    passengers: 4,
    convertible: false,
    mileage: 196740,
    "engine Capacity": 2200,
    weight: 2700,
    "number Of Doors": 5,
    engine: "petrol"  
}


console.log(cadilac);
console.log(carMazda);


var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"

 };

var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else { 
    bark = "woof woof";
}

var speak = dog.name + " says " + bark  + " when he wants to " + dog.activity;
console.log(speak);



var cadi = { 
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
   };


   var taxi = { 
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
   };


   var fiat = { 
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
   };

   var chevy = { 
    make: "Chevy",
    model: "Bel Air",
    year: 1957, 
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
   };

   var cadilac = {
    make: "Cadilac",
    model: "Escalate",
    year: 1995,
    color: "tan", 
    passengers: 5,
    convertible: false,
    mileage: 12892
};
//cadilac.needsWashing = true;

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}
 var worthALook = prequal(chevy);

  if (worthALook) {
      console.log("You gotta check out this " + cadilac.make + " " + cadilac.model);
  } else {
      console.log("You should really on the " + cadilac.make + " " + cadilac.model);
  }


  var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"

 };

 function loseWieght(pitbul,amount) {
     pitbul.weight = pitbul.weight - amount;
     console.log("Ваша собака " + dog.name + " походела на "  +  amount);
 }
loseWieght(dog, 15);
 



var superSecretFile = {
    level: "classified", // Уровень Секретный 
    opened: 0,  // открыл 
    password: 2, // Пароль
    contents: "Следующаяя встреча доктора Евелса состоиться в Детройте" // Контент 
   };


function getSecret(file, secretPassword) {
     file.opened = file.opened + 1;
     if (secretPassword == file.password) {
         return file.contents;
     }
     else {
         return "Неверный пароль";
     }
};


var secret = getSecret(superSecretFile,2);
console.log(secret);


function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
};

setSecret(superSecretFile,2," Следующая встреча будет в Филадельии ");


secret = getSecret(superSecretFile,2);
console.log(secret);


setSecret(superSecretFile, 2 , "Следующая встреча будет в городе Пинске");
console.log(getSecret(superSecretFile,2));
setSecret(superSecretFile, 2 , "Следующая встреча будет в городе Витебск");
console.log(getSecret(superSecretFile,2));


function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);
    var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
    };
    return car;
    }
    function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
    }
    var carToSell = makeCar();
    displayCar(carToSell);


function enough(cap, on, wait) {
    var result;
    var resultTwo;
   if (on <=  cap) {
      result = cap - on;
      if (wait < result) {
        return console.log("Можно вместить всех " + wait + " пассажиров"); 
      } else if ( wait > result) {
        resultTwo = wait - result;
    return console.log("может вместить " + result + " из " + wait + " ожидающих");
   } else if ( cap || on || wait == 0) {
       return console.log(0);
   }
 }
}
 enough(100,100,55); 