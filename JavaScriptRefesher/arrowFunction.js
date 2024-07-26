
const name="Max"
var age=23;
var hasHobbies=true;

age= 30;
const summarizeUser=(userName, userAge, userHasHobby)=>{
return (
    'Name is ' + userName + ', age is ' + userAge + ' User has a hobby ' + userHasHobby 
    );
}



console.log(summarizeUser(name,age, hasHobbies));

//using arrow funtion for addition 

const add=(a,b)=>{
    return a+b;
};

console.log(add(2,4));


// if we have simply single line function then we can just write the syntax as

const add1=(a,b)=>a+b;

console.log(add1(1,2));

