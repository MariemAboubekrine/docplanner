alert('HELLO WORLD')  
 var visitorName = prompt('what\'s your name:')
 console.log(visitorName)
 var isCoolWithIt = confirm("Are you ok with it?")
 var a = 2 + 2 // I’m a single line comment
/*
And I’m a multi-lines comment,
Anything in here will be ignored by the Javascript
Interpreter.
var b = 3 + 3
*/
// Let’s sum the values of a small array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

var sum = 0;
var i = 0;
while ( i < numbers.length ) {
    sum += numbers[i];
    i += 1;
}
console.log( 'The loop was executed ' + i + ' times' );
// prints The loop was executed 10 times

console.log(sum);
// prints 115
// Let’s sum the values of the pair array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// 2+6+2=10  
var sum = 0;
var i = 0;
while ( i < numbers.length ) {
    //calcul de la somme des nombres paires
    if (numbers[i] % 2 ==0)
    sum += numbers[i];
    console.log(sum);
    //incrémentation de l'indice i
    i += 1;
}
//affichage du resultat
console.log("la somme est"+ sum)

// Let’s sum the values of the impair array
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// 19+65+1+1+9+9+1=105 
var sum = 0;
var i = 0;
while ( i < numbers.length ) {
    //calcul de la somme des nombres impaires
    if (numbers[i] % 2 !==0)
    sum += numbers[i];
    console.log(sum);
    //incrémentation de l'indice i
    i += 1;
}
//affichage du resultat
console.log("la somme est"+ sum)