let arr = [];
for( let i=1; i<=1000;i++){
     arr.push(i);
 }
console.log(arr);

 // here the solution using loops starts
const x = 3;
let divisbleBy3 = [];
for(let i=0;i<arr.length;i++){
     if(arr[i]%x===0){
         divisbleBy3.push(arr[i]);
     }
 }
 console.log("Numbers divisible by 3: ",divisbleBy3);
 console.log("Amount of numbers divisible by 3: ",divisbleBy3.length);

 const y = 10;
 let divisbleBy10 = [];
 for(let i=0;i<arr.length;i++){
     if(arr[i]%y===0){
         divisbleBy10.push(arr[i]);
}
 }
 console.log("Numbers divisible by 10: ",divisbleBy10);
 console.log("Amount of numbers divisible by 10: ",divisbleBy10.length);

 const z = 21;
 let divisbleBy21 = [];
 for(let i=0;i<arr.length;i++){
 if(arr[i]%z===0){
         divisbleBy21.push(arr[i]);
}
 }
 console.log("Numbers divisible by 21: ",divisbleBy21);
 console.log("Amount of numbers divisible by 21: ",divisbleBy21.length);
 //the homework
//const arr = [];
for( let i=1; i<=1000;i++){
    arr.push(i);
}
console.log(arr);

// here please start your solution
// using closures, functions and (map,filter,reduce)
const divisibleFactory1 = arr.map(function(z){
  return z * 2;
});
const divisibleFactory2 = arr.filter(function(y){
  return y % 2;
});
const divisibleFactory3 = arr.reduce(function(z,y){
  return z + y;
});
console.log(divisibleFactory1);
console.log(divisibleFactory2);
console.log(divisibleFactory3);
