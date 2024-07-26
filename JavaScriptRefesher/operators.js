// there are two types or operators that are used frequently in javaScript
// REST and SPREAD

// 
const person={ 
    name:'Max',
    age: 23,
    greet(){
        console.log("hi, I am "+ this.name);
    }

};
person.greet();



const hobbies=['sports', 'cooking', 'reading'];

const copiedArray=hobbies.slice(); // it is used to copy the complete array without missing any of the elements
 console.log(copiedArray);

console.log(hobbies);
