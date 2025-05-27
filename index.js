
// // 📘 JavaScript Learning Summary by Nischal

// // ----------------------
// // 1. Multi-Dimensional Arrays
// // ----------------------
// let a = [[2, 4, 7], [8, 9, 4]];
// console.log(a[1][1]); // Output: 9

// let emptyArray = [];
// console.log(emptyArray);

// let names = Array();
// names[0] = "xyz";
// names[1] = "aBc";
// names[3] = "Pqr";
// console.log(names);

// let value = Array();
// value[0] = Array();
// value[1] = Array();
// value[2] = Array();
// value[0][0] = 2;
// value[0][1] = 3;
// value[0][2] = 4;
// value[0][3] = 5;
// value[1][0] = "Shankhar";
// value[1][1] = "Nischal";
// value[1][2] = "hero";
// value[1][3] = "don";
// value[2][0] = "no";
// value[2][1] = "dada";
// value[2][2] = "true";
// console.log(value);

// // ----------------------
// // 2. Array Methods
// // ----------------------
// const ary22 = [2,3,4,5,6,22,1,12,3,4,5556,7];
// ary22.push(3);
// ary22.pop();
// ary22.unshift(4);
// ary22.shift();
// console.log(ary22);

// const ary25 = [2,3,4,5,8,9,10,12,14];
// const data = ary25.splice(2,1,22,35);
// console.log(data);

// let ary = [1,33,6,7,2,22,3,333];
// console.log(ary.length);
// console.log(ary.toString());
// console.log(ary.indexOf(2));
// console.log(ary.at(20)); // undefined
// console.log(ary.includes(3));
// console.log(ary.join('.. '));
// ary.push(3);
// console.log(ary);
// ary.pop();
// console.log(ary);

// // ----------------------
// // 3. Sorting and Reversing
// // ----------------------
// ary.sort((a,b)=>b-a); // Descending
// console.log(ary);
// console.log(ary.reverse());

// // ----------------------
// // 4. Looping Methods
// // ----------------------
// // forEach
// ary.forEach((value) => console.log(value));

// // map
// let doubled = ary.map((value) => value * 2);
// console.log(doubled);

// // filter
// ary.filter((value) => {
//     if (value % 2 == 0) console.log(value);
// });

// // reduceRight
// let reduced = ary.reduceRight((initial, value) => initial - value);
// console.log(reduced);

// // every & some
// let every = ary.every((value) => value > 8);
// console.log(every);

// let some = ary.some((value) => value > 2);
// console.log(some);

// // ----------------------
// // 5. Spread Operator
// // ----------------------
// let ary1 = [1,2,6,9,10];
// let ary2 = [3,4,5,6,7,8];
// let ary3 = [19,20,33,44,55];
// let ary4 = [...ary1, ...ary2, ...ary3];
// console.log(ary4);

// // ----------------------
// // 6. Objects and JSON
// // ----------------------
// const person = {
//     name: "Nischal",
//     age: 19,
//     city: {
//         perm: "Gulmi",
//         temp: "Butwal"
//     }
// };
// console.log(typeof person);
// console.log(person.name);
// person.edu = "CSIT";
// delete person.age;
// let jsonString = JSON.stringify(person);
// document.write(jsonString);

// for (let key in person) {
//     if (typeof person[key] === "object") {
//         for (let nestedKey in person[key]) {
//             document.write(nestedKey + ": " + person[key][nestedKey] + "<br>");
//         }
//     } else {
//         document.write(key + ": " + person[key] + "<br>");
//     }
// }

// // ----------------------
// // 7. Object Constructor
// // ----------------------
// function Person(name, age, city, country) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country || "Nepal";
// }
// const p1 = new Person("Nischal", 19, "Butwal");
// const p2 = new Person("Kiran", 20, "Butwal");
// console.log(p1, p2);

// // ----------------------
// // 8. Date Methods
// // ----------------------
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());

// // Month Switch
// switch (date.getMonth()) {
//     case 0: console.log("January"); break;
//     case 1: console.log("February"); break;
//     case 2: console.log("March"); break;
//     case 3: console.log("April"); break;
//     case 4: console.log("May"); break;
//     case 5: console.log("June"); break;
//     case 6: console.log("July"); break;
//     case 7: console.log("August"); break;
//     case 8: console.log("September"); break;
//     case 9: console.log("October"); break;
//     case 10: console.log("November"); break;
//     case 11: console.log("December"); break;
// }

// // Day Switch
// switch (date.getDay()) {
//     case 0: console.log("Sunday"); break;
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
// }

// // ----------------------
// // 9. Pattern Printing
// // ----------------------
// // for (let i = 5; i >= 1; i--) {       

// //     for (let j = 1; j <= i; j++) {
// //         document.write(j);   
// //     }
// //     document.write("<br>");
// // }




// // for (let i = 5; i >= 1; i--) {
// //     for (let j = 1; j <= i; j++) {
// //         document.write("*");
// //     }
// //     document.write("<br>");



// // }
// // for (let i = 5; i >= 1; i--) {
// //     for (let j = 1; j <= i; j++) {
// //         document.write("*");
// //     }
// //     document.write("<br>");
// // }
// // for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         document.write("*");
// //     }
// //     document.write("<br>");
// // }




// // for (let i = 5; i >= 1; i--) {
// //     for (let j = 1; j <= i; j++) {
// //         document.write("*");
// //     }
// //     document.write("<br>");
// // }
// // for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         document.write("*");
// //     }
// //     document.write("<br>");
// // }



// // for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= 5-i; j++) {
// //         document.write("&nbsp;&nbsp;");
// //     }
// //     for (let k = 1; k <= i; k++) {
// //         document.write("*");
// //     }
// //     document.write("<br>");
// // }


// for (let i=1;i<=5;i++){
//     for (let j=1;j<=5-i;j++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let k=1;k<=i;k++){
//         document.write("*");
//     }
//     document.write("<br>"); 
// }

// // for (let i = 1; i <= 5; i++) {
// //     let line = "";
// //     for (let j = 1; j <= 5 - i; j++) {
// //         line += " ";  // two spaces
// //     }
// //     for (let k = 1; k <= i; k++) {
// //         line += "*";
// //     }
// //     console.log(line);
// // }

// // Assignment 
// // Opposite of the above pattern
// // Print the following pattern:
// //       *
// //      ***
// //     *****
// //    *******
// //   *********


// for (let i=1;i<=5;i++){
//     for (let j=1;j<=5-i;j++){
//         document.write("&nbsp;&nbsp;")

//     }
//     for (let k=1;k<=2*i-1;k++){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// for (let i=5;i>=1;i--){
//     for (let j=1;j<=5-i;j++){
//         document.write("&nbsp;&nbsp;")

//     }
//     for (let k=1;k<=2*i-1;k++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


//  for (let  i=5;i>=1;i--){
//     for (let j=1;j<=5-i;j++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let k=1;k<=i;k++){
//         document.write("*");
//     }
//     document.write("<br>"); 
// }





// .... Math In JS ......//
// console.log(Math.PI);
// console.log(Math.abs(-9))
// console.log(Math.sqrt(4.3));
// console.log(Math.pow(2,3)); 
// console.log(Math.floor(4.3));   
// console.log(Math.ceil(4.3));   
// console.log(Math.round(4.3));
// console.log(Math.random());
// console.log(Math.max(2999,333,1,2,3,4,5,333,31,2,3,212,141,3123,223,1,1,134));
// console.log(Math.min(2999,333,1,2,3,4,5,333,31,2,3,212,141,3123,223,1,1,134));

// console.log(Math.min[2999,333,1,2,3,4,5,333,31,2,3,212,141,3123,223,1,1,134]);


// let y=[1,2,3,4,5,6,7,8,9];

// console.log(Math.max(...y))


// let randomnum=Math.floor(Math.random()*y.length);
// console.log(randomnum);
// console.log(Math.log10(1000))
// console.log(Math.log(1000))
// console.log(Math.log2(1000))
// console.log(Math.sin(90*Math.PI/180))
// console.log(Math.cos(90*Math.PI/180))

// b=("I Love JavaScript")
// console.log(b.toUpperCase())

// console.log(b.slice(2,6))
// let a="Nischal Panthi"
// console.log(a.includes('z'))

// console.log(b.replace("Love","hate"))
// console.log(b.split(""))   // the output depends on what we give in between



// console.log(b.concat(" too much"))  // Joins


// Set Timeout and Set Interval


// console.log("first")
// setTimeout(()=>{
//     console.log("set timeout output")
// },1000)
// console.log("last")
// let count =0;
// console.log("first")
// let a = setInterval(()=>{
//     console.log("set timeout output")
//     count ++;
//     if (count === 5){
//     clearInterval(a)
//     }
// },1000)
// console.log("last")








// setInterval(()=>{
//     date = new Date();
//     document.getElementById("clock").innerText=(date.toLocaleTimeString());
// }
// ,1000)
// const loading = document.getElementById("loading");
// let dotCount = 0;

// const a = setInterval(() => {
//     loading.textContent = "Loading" + ".".repeat(dotCount);
//     dotCount++;
//     if (dotCount > 3) {
//         dotCount=1;
//     }
// }, 500); 

















// setInterval(()=>{
//     date = new Date();
//     document.getElementById("clock").innerText=(date.toLocaleTimeString());
// }
// ,1000)



//     const box = document.getElementById("box");
//     const button=document.getElementById("startButton") 
//     button.addEventListener("click",()=>{
//         let percentage=0;

//     const interval = setInterval(() => {
//         box.style.width = `${percentage}%`; 
//         box.textContent = `${percentage}%`; 

//         if (percentage === 100) {
//             clearInterval(interval); 
//             box.textContent = "Done"; 
//         }

//         percentage++; 
//     }, 30); 
// });


// try{
//     add();
//     document.write("yo skip hunxa")

// }
// catch(error){
//     {
//         throw("function xainw")
//     document.write("add function banauu <br>")
// }
// }
// finally{
//     document.write("yo chai hunxa")
// }
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const file = document.getElementById("file").value;
//     console.log(name);
//     console.log(email);

//     function validatePassword(password) {
//         const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//         return re.test(password);
//     }

//     if (name.length < 5) {
//         alert("Name must be at least 5 characters long.");
//     } else if (!validatePassword(password)) {
//         alert("Invalid password format.");
//     } else if (file.length < 1) {
//         alert("Please upload a file.");
//     } else {
//         alert("Form submitted successfully!");
//     }   

// });

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const name = document.getElementById("username").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const password = document.getElementById("password").value.trim();
//         const fileInput = document.getElementById("file");
//         const file = fileInput.files[0];

//         try {
//             if (!name || !email || !password || !file) {

//                 alert("All fields are required.");
//             }



//                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//                 throw new Error("Invalid email format.");
//             } else if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
//                 throw new Error("Password must be at least 8 characters long and include at least one letter and one number.");
//             }
//             else if (file.type !== "image/png" && file.type !== "image/jpeg") {
//                 throw new Error("File must be a PNG or JPEG image.");
//             }
//             else if (file.size > 1024 * 1024) {
//                 throw new Error("File size must be less than 1MB.");
//             }
// else{

//         document.write(`
//             Form Submitted Successfully!

//             Username: ${name}
//             Email:= ${email}
//             Password: ${"*".repeat(password.length)}
//             Uploaded File: ${file.name}
//         `);
// }
//         } catch (error) {
//             alert(error.message);
//         }
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const togglePassword = document.getElementById("togglePassword");
//     const passwordField = document.getElementById("password")
//     togglePassword.addEventListener("click", () => {
//         const type = passwordField.type === "password" ? "text" : "password";
//         passwordField.type = type;
//         togglePassword.textContent = type === "password" ? "👀" : "🙈";
//     });

//     document.addEventListener("reset" ,function(e){
//     e.preventDefault();
//     })
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const div = document.getElementsByClassName("class")[0];
//     div.innerText = "<p>hello world</p>"
//     const id = document.getElementsByTagName("a")[0];
//     id.innerText = "I am Nischal"
//     id.setAttribute("href", "https://www.linkedin.com/in/nischal-panthi/?originalSubdomain=np",)
//     console.log(id.getAttribute("href"));
//     id.style.color = "white";
//     id.style.fontSize = "20px";
//     id.style.textDecoration = "none";qq
//     id.style.fontWeight = "bold";
//     id.style.backgroundColor = "black";
//     id.style.padding = "10px";
//     id.style.borderRadius = "5px";
//     id.style.display = "inline-block";
// });
// const btn = document.getElementById("Btn")
// btn.addEventListener("dblclick", myfunction)
// function myfunction() {
//     alert("Button-Double clicked!");
//     btn.style.backgroundColor = "blue";
//     btn.style.color = "white";
// }
// btn.addEventListener("mousedown", myfunction)
// function myfunction() {
//     alert("Button-Pressed!");
//     btn.style.backgroundColor = "blue";
//     btn.style.color = "white";
// }
// btn.addEventListener("mouseup", myfunction)
//  function myfunction() {
//     alert("Button-Pressed!");
//      btn.style.backgroundColor = "blue";
//      btn.style.color = "white";
//  }
// btn.addEventListener("mouseover", myfunction)
// function myfunction() {
//     alert("Button-Pressed!");
//     btn.style.backgroundColor = "blue";
//     btn.style.color = "white";
// }
// btn.addEventListener("mouseout", myfunction)
// function myfunction() {
//     alert("Button-Pressed!");
//     btn.style.backgroundColor = "blue";
//     btn.style.color = "white";
// }
// document.addEventListener("keypress",function(e){
//     console.log(e.key);
// })


// Promises 
// let myPromise= new Promise((resolve,reject)=>{
//   return reject();  
// }
// )
// myPromise.then(()=>{
//     console.log("Success")
// })
// .catch(()=>{
//     console.log("Error")
// })

// let apiCall = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => resolve(data)) 
//     .catch(error => reject(Error))

// Async Await

// let prom=new Promise((resolve,reject)=>{
//     return resolve()
// })
// async function handlePromise(){
//     try{
//         await prom;
//         console.log("Promise resolved successfully");
//     }
//     catch(e){
//         console.log("e");
//     }
// }
// handlePromise();
// async function apiCall() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         if (!response.ok) {
//             throw new Error("Response Aayena")
//         }
//         const data = await response.json()
//         console.log(data)

//     }
//     catch (e) {
//         console.log(e)
//     }
// }
// apiCall();

const images = document.getElementById("images")
const button = document.getElementById("Btn")



const URL = "https://api.adviceslip.com/advice"
const apiCall = async () => {
    try {
        let response = await fetch(URL)
        if (!response.ok) {
            throw new Error("Response Aayena")
        }
        const dogs = await response.json()
        console.log(dogs.slip.advice);
        images.innerHTML = dogs.slip.advice

    }
    catch (e) {
        console.log(e)
    }

}
button.addEventListener('click', apiCall)
