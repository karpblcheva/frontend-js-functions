var array = [567,786,57,986,2345,75,23,8654,8];

function min (array) 
{
 var min = array[0];
 for (var i = 1; i <= array.length - 1; i++) {
     if (array[i] < min) {
     min = array[i]
     }
    }
 return min
}
console.log(min(array))

function max (array) 
{
 var max = array[0];
 for (var i = 1; i <= array.length - 1; i++) {
     if (array[i] > max) {
     max = array[i]
     }
    }
 return max
}
console.log(max(array))

function sum (array) 
{
 var s = array[0];
 for (var i = 1; i <= array.length - 1; i++) {
     s = s + array[i]
     }
 return s
}
console.log(sum(array))