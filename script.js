//document.getElementById("demo").innerHTML = "My First JavaScript demo";

// alert(5 + 6);


     // function myFunction() {
        //    document.getElementById("demo").innerHTML = 5 + 6 ;            
        // }

        // window.alert(5 + 6);

    // console.log(5 + 6);

    // let x, y, z;
    // x = 5;
    // y = 6;
    // z = x+y;

    // document.getElementById("demo").innerHTML = "The value of Z is" + z + ".";

    // document.getElementById("demo").innerHTML = 10.50;

    // document.getElementById('demo').innerHTML = 'John'+ " " + "Deo"; 

    // function myFunction(){
    //     const x = 6;
    //     const y = 3;

    //     document.getElementById("demo").innerHTML = (x < 10 && y > 1) + "<br>" + (x < 10 && y < 1) + "<br>" + (x > 10 && y > 1) + "<br>" + (x < 10 != y > 1);

    // }

    // function myFunction(){
    //     const person ={
    //         firstName: "John",
    //         lastName: "Doe",
    //         age: 50,
    //         eyeColor: "blue"
    //     };

    //     document.getElementById("demo").innerHTML = person.firstName + " is "+ person.age + " years old.";

    // };

    // function myFunction(){
    //     const person =["Saab","Volvo","BMW"];

    //     document.getElementById("demo").innerHTML = person[0] + " is "+ person[2] + " years old.";

    // };

    // function myFunction( p1, p2){
    //     return p1*p2;

    // }
    // let result = myFunction(4, 3);
    // document.getElementById("demo").innerHTML = result;

    //JavaScript String Method

    // let str = "Apple, Bannna, KiWi";

    // same task (start, end)
    // document.getElementById('demo').innerHTML = str.substring(7,13);
    // document.getElementById('demo').innerHTML = str.slice(7,13);

    // document.getElementById('demo').innerHTML = str.substr(7,7);

    // document.getElementById('demo').innerHTML = str.replace("Apple","Orange");

    // function myFunction(){
    //     let text = document.getElementById('demo2').innerHTML;

    //     document.getElementById('demo2').innerHTML = text.replace(/Microsoft/i,"Crystal");

    // }


    
    // function myFunction(){
    //     const text = "Please locate where 'locate' occurs! "

    //     const index = text.indexOf("locate"); //lastIndexOf()
    //text.search()
    //     document.getElementById('demo').innerHTML = index;
        
    // }

    // match 

    // function myFunction(){
    //     const text = "Please locate where 'locate' occurs! "

    //     const index = text.match("loc");
    //text.match(/ain/gi);
    //text.matchAll();

    //     document.getElementById('demo').innerHTML = index;
        
    // }

     // include es6 

    // function myFunction(){
    //     const text = "Please locate where 'locate' occurs! "

    //     const index = text.includes("loc");
    //true or false return
    
    //     document.getElementById('demo').innerHTML = index;
        
    // }

    //startsWith() es6
    //endsWith()

    // function myFunction(){
    //     let price = 10;
    //     let VAT = 0.25;

    //     let total = `Total: ${(price * ( 1 + VAT )).toFixed(2)}`;

    //     document.getElementById('demo').innerHTML = total;
    // }

    //typeof NaN - Number

    // BigInt assign not change after 15 digit,it will be unchange.

    // number method

    // function myFunction(){
    //     const fruits = ["Banana","Orange","Apple","Mango"];

    //     document.getElementById("demo").innerHTML = fruits.length; 
    // }

    // function myFunction(){
    //     const fruits = ["Banana","Orange","Apple","Mango"];

    //     let text = "<ul>";
    //     for(let i =0; i<fruits.length; i++){
    //         text += "<li>"+ fruits[i]+ "</li>"
    //     }
    //     text += "</ul>";

    //     document.getElementById('demo').innerHTML = text;
    // }

    // function myFunction(){
    //     const fruits = ["Banana","Orange","Apple","Mango"];

    //     let text = "<ul>";
    //     fruits.forEach((value) =>{
        
    //      text += "<li>" + value + "</li>"; 
        
    //     });
    //     text += "</ul>";

    //     document.getElementById('demo').innerHTML = text;
    // }

    // const fruits = ["Banana","Orange","Apple","Mango"];

    // document.getElementById('demo').innerHTML = fruits;

    // function myFunction(){

    //     text = fruits.push("Lemon");

    //     document.getElementById('demo').innerHTML = fruits;
    // }


    // function myFunction(){
    //     const numbers = [45, 4, 49, 15, 25];

    //     let txt = "";
    //     for(let x in numbers){
    //         txt += numbers[x] + " ";
    //     }

    //     document.getElementById("demo").innerHTML = txt;
    // }

    // const numbers = [45, 4, 49, 16, 25];
    // let txt = "";
    // numbers.forEach(myFunction);
    // document.getElementById("demo").innerHTML = txt;

    // function myFunction(value, index, array){
    //     txt += value + "<br>";
    // }

    // const letters = new Set();

    // letters.add("a");
    // letters.add("b");
    // letters.add("c");

    // document.getElementById("demo").innerHTML = letters.size;

    // function myFunction(){
    //     const person = {
    //         firstName: "John",
    //         lastName:  "Deo",
    //         id: 5566,
    //         fullName: function(){
    //             return this.firstName + " " + this.lastName;
 
    //        }
    //     }

    //     document.getElementById("demo").innerHTML = person.fullName();
    // }


    // function myFunction(){
    // let hello = "";

    // hello = function(){
       
    //     return "Hello World"; 

    // }

    // document.getElementById("demo").innerHTML = hello();
    // }

        
        // hello = () => {
        //     return "hello World";
        // }

        // hello = () => "Hello World";

        // hello = val => "hello " + val;

        // document.getElementById("demo").innerHTML = hello("Universe!");

        // arrow function

        // let myFunction = () => {

        //     // let hello = "";
            
        //     let hello = val => "hello " + val;
    
        //     document.getElementById("demo").innerHTML = hello("Universe!");
    
        // }

    // let myFunction = () => {
    //     const person = {
    //         firstName: "John",
    //         lastName: "deo",
    //         age: 50,
    //         eyecolor: "blue"
    //     };

    //     delete person["age"];

    //     document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old."
    // }
    
    // const person = {
    //     firstName: "John",
    //     lastName: "Deo",
    //     display: function (){
    //         let x  = document.getElementById("demo").innerHTML = x.firstName + " " + x.lastName;
    //     }

    // }

    // let display = person.display.bind(person);
    // setTimeout(display, 30000)


    // Callback function

    // function myFunction(some){

    //     document.getElementById("demo").innerHTML= some;

    //     function myCalculator(num1, num2, myCallback){
    //         let sum = num1 + num2;
    //         myCallback(sum);
    //     }
    
    //     myCalculator(5, 5, myFunction);

    // }

    // function myFunction(some){
    //     document.getElementById("demo2").innerHTML = some; 
    
        
    // }

    // let myPromise = new Promise(function(myResole, myReject){
    //     let x = 0;

    //     if(x == 0){
    //         myResole("Ok");
    //     }else{
    //         myReject("Error");
    //     }

    // });

    // myPromise.then(
    //     function(value){
    //         myFunction(value);
    //     },

    //     function(error){
    //         myFunction(error);
    //     }
    // );

    // async function myFunction(){
    //     let myPromise = new Promise(function(resolve, reject){
    //         resolve("I am superhero!");
    //     });

    //     document.getElementById("demo").innerHTML = await myPromise;
    // }

   


    

  






    



    




    