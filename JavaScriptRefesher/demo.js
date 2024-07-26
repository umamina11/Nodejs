
//initialising the values using the var and if we have intention to chnage the values in code then we use the let and if we want to make no chnages in the values in future and that value need to be fixed then we use const 

var name="Max"


//console.log(name);

var age=23;
var hasHobbies=true;

age= 30;

function summarizeUser(userName,userAge, userHasHobby){
return (
    'Name is '+ userName+', age is '+ userAge + ' User has hobby is ' + userHasHobby 

    );
}
console.log(summarizeUser(name,age, hasHobbies));