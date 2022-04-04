// Create one function with zero parameter having a console statement;

function zero(){
    console.log("Hello")
}
zero()


// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b){
   console.log(a+b)
}
sum(3,4)



// Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old"


function name(fname,lname,age){
    console.log(fname+" "+lname+" "+"is"+" "+age+" "+"years"+" "+"old")
}
name("navdeep","Awasthy" , 23)


// Create one arrow function
let A=()=>console.log("NAV")
A()



// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// output
// undefined
// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


// output
// 21



// "Print output

var x = 21;
a();
b();
console.log(a);
function a () {
    
    var x = 20;
console.log(x);
};

function b () {
    
    var x = 40;
console.log(x);
};
// output
// 20,40,function a(){
//     var x=20;
//  console.log(x);
// }
// "Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
// output
// // 20,40,function a(){
//     var x=20;
//  console.log(x);
// }
// "Print output


// Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
result=factorial(4);
console.log(result);