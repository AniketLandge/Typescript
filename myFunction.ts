const addTwo = (num: number) => { return num + 2 }
addTwo(5);
// addTwo("3") this line will throw an error

const getUpper = (val:string) => { return val.toUpperCase() }
getUpper("Rohan");
// getUpper(5); this line throw an error

const signupUser = (name:string, email:string, isPaid:boolean) => {  }
signupUser("rohan","rohan.dev",false);

const loginUser = (name:string, email:string, isPaid:boolean = false) => {  }
loginUser("ro", "ro@r.com")