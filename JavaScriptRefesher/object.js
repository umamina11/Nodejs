// Dot function 
//Objects
const person={ 
    name:'Max',
    age: 23,
    greet(){
        console.log("hi, I am "+ this.name);
    }

};
person.greet();


//Arrays

const hobbies=['sports', 'cooking', 'reading'];

//for (let hobby of hobbies){
 //   console.log(hobby);
//}

console.log(hobbies.map(hobby=>'Hobby:'+hobby));      /// allow to transform the array or value

console.log(hobbies);



//arrays and objects are reference type 
// reference type only point to the addresss where the values are stored and not deal with the values directly 
