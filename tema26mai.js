//Declararea unui obiect
let ob = {
	name: "Mike",
	age: 31
}
console.log(ob.name);
console.log(ob["age"]);

//lucrul cu proprietatile
let dog = {
	breed: "bulldog",
	age: 2,
	"play with the cat": true
}
console.log(dog.age);
let key = "age"; //doar prin ghilimele
dog.age = 3; //pentru a modifica un parametru
console.log(dog.breed, dog["play with the cat"]);
console.log(dog[key]);

//copierea obiectului
let car = {
	color: "red",
	model: "Subaru"
};
let clone = {};
for(let key in car) { 
	clone[key] = car[key];				//varianta prescurtata, vizualizam ce key-uri avem	console.log(key);
}
				//clone.color = car.color; pe lung
				//clone.model = car.model; pe lung
console.log(car);
console.log(clone);

//metoda 2 care ne returneaza key-urile
console.log(Object.keys(car));
//metoda 3
Object.keys(car).forEach((el) => {
	clone[el] = car[el];
});

//metoda de copiere cu Object.assign
Object.assign(clone, car);
console.log(car);
console.log(clone);
//ca sa adaugam alt key
Object.assign(clone, {...car, fuel: 'gas'});
console.log(clone);

//JSON.stringify - obiectele sunt convertite in stringuri care se transmit pe backend
let fruits = {
	name1: "orange",
	name2: "cherry",
	name3: "strawberry"
};
let a = JSON.stringify(fruits);
console.log(a);
//este si metoda inversa, de a transforma inapoi in obiecte
let b = JSON.parse(a);
console.log(b);

//verificarea unei proprietati in obiect
console.log("name2" in fruits);
console.log("name4" in fruits);
//sau prim metoda if
if ("name2" in fruits) {
	console.log("YES");
}

//stergerea unui parametru
delete fruits.name3;
console.log(fruits);

//un object poate avea si o functie inclusa
// let summer = {morning:"15degC", day: "30degC", night: "20degC",
// 	temperature: () => {
// 		console.log("Is so hot");
// 	}
// };
// summer.temperature();

let summer = {morning:"15degC", day: "30degC", night: "20degC",
	temperature: (rising) => {
		if (rising >= 25) {
		console.log("Is so hot");
	} else if (rising >= 14){
		console.log("Not too hot");
	} else {
		console.log("Is cold");
	}
  }
};
summer.temperature(10);
summer.temperature(20);
summer.temperature(25);

//folosirea this
let dad = {
	firstName: "Vladimir",
	age: 57,
	fullName: function(man) {
	return this.firstName + " " +"is " + this.age + " " + "years old";
  }
};
console.log(dad.fullName());
//crearea unui nou obiect new

function Job(domain, risk) {
	this.domain = domain;
	this.risk = risk;
}
let job = new Job("miner", "high");
console.log("Domain: " + job.domain, ("risk: " + job.risk));

//prototype se foloseste atunci cand o proprietate nu este indentificata intr-un obiect, se cauta in alta, un obiect poate mosteni
//de la alt obiect
let human = {
	rase: "european",
	skin_color: "white"
};
let moldovan = {
	region: "center",
	language: "romaninan"
};
moldovan.__proto__ = human;
console.log(moldovan.rase); //daca rescriem o proprietate, ea nu se va schimba
//verificarea unei proprietati
console.log(moldovan.hasOwnProperty("skin_color"));

