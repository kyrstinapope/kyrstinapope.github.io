let numberArray = [ 1, 2, 3, 7, 8, -1]
undefined
let myObject = { key: "value", sibling: 5, home: "rexburg"} 

undefined
numberArray
(6) [1, 2, 3, 7, 8, -1]
myObject
{key: "value", sibling: 5, home: "rexburg"}
numberArray[4]
8
myObject["home"]
"rexburg"
objectArray = [ {one: "preston"}, {three: "home"}, {two: "boise"}]
(3) [{…}, {…}, {…}]0: {one: "preston"}1: {three: "home"}2: {two: "boise"}length: 3__proto__: Array(0)
objectArray = [ {one: "preston"}, {three: "home"}, {two: "boise", city: "today" , program: "js"}]
(3) [{…}, {…}, {…}]0: {one: "preston"}1: {three: "home"}2: {two: "boise", city: "today", program: "js"}length: 3__proto__: Array(0)
objectArray[2]
{two: "boise", city: "today", program: "js"}
objectArray[2].city
"today"
objectArray[2].city[2]
"d"
temp1
{towns: Array(7)}towns: Array(7)0: {name: "Springfield", photo: "springfield.jpg", motto: "Where everyone is lifted.", yearFounded: 1826, currentPopulation: 17852, …}1: {name: "Fish Haven", photo: "fishhaven.jpg", motto: "This is Fish Heaven.", yearFounded: 1864, currentPopulation: 501, …}2: {name: "Franklin", photo: "franklin.jpg", motto: "Where you will grow!", yearFounded: 1788, currentPopulation: 30458, …}3: {name: "Greenville", photo: "greenville.jpg", motto: "Green is our way of life.", yearFounded: 1805, currentPopulation: 33458, …}4: {name: "Placerton", photo: "placerton.jpg", motto: "Positive Placement in Placerton.", yearFounded: 1946, currentPopulation: 512, …}5: {name: "Preston", photo: "preston.jpg", motto: "Home of Napoleon Dynamite.", yearFounded: 1866, currentPopulation: 5204, …}6: {name: "Soda Springs", photo: "sodasprings.jpg", motto: "Historic Oregon Trail Oasis. The Soda is on Us.", yearFounded: 1858, currentPopulation: 2985, …}length: 7__proto__: Array(0)__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
temp1.towns[6]
{name: "Soda Springs", photo: "sodasprings.jpg", motto: "Historic Oregon Trail Oasis. The Soda is on Us.", yearFounded: 1858, currentPopulation: 2985, …}
temp1.towns[6].name
"Soda Springs"
temp1.towns[0].photo
"springfield.jpg"
temp1.town[5].name
VM1501:1 Uncaught TypeError: Cannot read property '5' of undefined
    at <anonymous>:1:11
(anonymous) @ VM1501:1
temp1.towns[5].name
"Preston"
temp1.towns[5,1,6].name
"Soda Springs"
temp1.towns[5].name
"Preston"
[].forEach((crazyman) => {
    console.log(crazyman)
    console.log(crazyman.name)
})




undefined
temp1.forEach((city) =>{
})
VM1971:1 Uncaught TypeError: temp1.forEach is not a function
    at <anonymous>:1:7
(anonymous) @ VM1971:1
temp1
{towns: Array(7)}towns: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]__proto__: Object
temp1.towns
(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {name: "Springfield", photo: "springfield.jpg", motto: "Where everyone is lifted.", yearFounded: 1826, currentPopulation: 17852, …}1: {name: "Fish Haven", photo: "fishhaven.jpg", motto: "This is Fish Heaven.", yearFounded: 1864, currentPopulation: 501, …}2: {name: "Franklin", photo: "franklin.jpg", motto: "Where you will grow!", yearFounded: 1788, currentPopulation: 30458, …}3: {name: "Greenville", photo: "greenville.jpg", motto: "Green is our way of life.", yearFounded: 1805, currentPopulation: 33458, …}4: {name: "Placerton", photo: "placerton.jpg", motto: "Positive Placement in Placerton.", yearFounded: 1946, currentPopulation: 512, …}5: {name: "Preston", photo: "preston.jpg", motto: "Home of Napoleon Dynamite.", yearFounded: 1866, currentPopulation: 5204, …}6: {name: "Soda Springs", photo: "sodasprings.jpg", motto: "Historic Oregon Trail Oasis. The Soda is on Us.", yearFounded: 1858, currentPopulation: 2985, …}length: 7__proto__: Array(0)
temp1.towns.forEach((city)=>{
    console.log(city);
})
VM2288:2 {name: "Springfield", photo: "springfield.jpg", motto: "Where everyone is lifted.", yearFounded: 1826, currentPopulation: 17852, …}
VM2288:2 {name: "Fish Haven", photo: "fishhaven.jpg", motto: "This is Fish Heaven.", yearFounded: 1864, currentPopulation: 501, …}
VM2288:2 {name: "Franklin", photo: "franklin.jpg", motto: "Where you will grow!", yearFounded: 1788, currentPopulation: 30458, …}
VM2288:2 {name: "Greenville", photo: "greenville.jpg", motto: "Green is our way of life.", yearFounded: 1805, currentPopulation: 33458, …}
VM2288:2 {name: "Placerton", photo: "placerton.jpg", motto: "Positive Placement in Placerton.", yearFounded: 1946, currentPopulation: 512, …}
VM2288:2 {name: "Preston", photo: "preston.jpg", motto: "Home of Napoleon Dynamite.", yearFounded: 1866, currentPopulation: 5204, …}
VM2288:2 {name: "Soda Springs", photo: "sodasprings.jpg", motto: "Historic Oregon Trail Oasis. The Soda is on Us.", yearFounded: 1858, currentPopulation: 2985, …}
undefined
temp1.towns.forEach((city)=>{
console.log(city.name);
    city.name
})
VM2418:2 Springfield
VM2418:2 Fish Haven
VM2418:2 Franklin
VM2418:2 Greenville
VM2418:2 Placerton
VM2418:2 Preston
VM2418:2 Soda Springs
undefined
temp1.towns.forEach((city)=>{
console.log(city.name !=);
if{
    city.name
})
VM2458:2 Uncaught SyntaxError: Unexpected token ')'
temp1.towns.forEach((city)=>{
console.log(city.name !=);
if (city.name == "preston"){
})
VM2499:2 Uncaught SyntaxError: Unexpected token ')'
temp1.towns.forEach((city)=>{
console.log(city.name !=);
if (city.name == "preston"){
console.log(city.name);
}
})
VM2557:2 Uncaught SyntaxError: Unexpected token ')'
temp1.towns.forEach((city)=>{

if (city.name == "preston"){
console.log(city.name);
}
})
undefined
temp1.towns.forEach((city)=>{
reston"){
console.log(city.name);
}
})
VM2582:2 Uncaught SyntaxError: Invalid or unexpected token
temp1.towns.forEach((city)=>{
reston"){
console.log(city.name);
}
})
VM2587:2 Uncaught SyntaxError: Invalid or unexpected token
temp1.towns.forEach((city)=>{

if (city.name == "Preston"){
console.log(city.name);
}
VM2593:5 Uncaught SyntaxError: Unexpected end of input
temp1.towns.forEach((city)=>{

if (city.name == "Preston"){
console.log(city.name);
}
})
VM2603:4 Preston
undefined
temp1.towns.forEach((city)=>{

if (city.name == "Preston" && city.name == "Fish Haven" && city.name == "Soda Springs"){
console.log(city.name);
}
})
undefined
temp1.towns.forEach((city)=>{

if (city.name == "Preston" || "Fish Haven" || "Soda Springs"){
console.log(city.name);
}
})
VM2730:4 Springfield
VM2730:4 Fish Haven
VM2730:4 Franklin
VM2730:4 Greenville
VM2730:4 Placerton
VM2730:4 Preston
VM2730:4 Soda Springs
undefined
temp1.towns.forEach((city)=>{

if (city.name == "Preston" || city.name == "Fish Haven" || city.name == "Soda Springs"){
console.log(city.name);
}
})
VM2752:4 Fish Haven
VM2752:4 Preston
VM2752:4 Soda Springs
undefined