let greetings: string = "Aniket" // string

//number
let userId: number = 1234
let userId2 = 1234 // typescript is smart enough to detect number values => type inference

//boolean
let isLoggedIn: boolean = false;

//any
//if ts doesent know which type of data is going to assign to the variable in future then it will be typed as any

//ex 1

let myHero;
const getHero = () => {
    // return "thor"
    return true
}
myHero = getHero(); // if you hover on myHero then it will be any which is dangerous bcz you can retrun boolean,number etc from getHero function

// ex 2

let myHero2: string;
const getHero2 = () => {
     return "thor"
    //return true
}
myHero2 = getHero2();

export {}