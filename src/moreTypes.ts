let response: any = "42";

let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);


// Type Assertion Examples

const inputElement  = document.getElementById('username') as HTMLInputElement


let value: any

value = 'chai'
value = [1, 2, 3]
value = 2.4
value.toUpperCase()


let newvalue: unknown

newvalue = 'chai'
newvalue = [1, 2, 3]
newvalue = 2.4
if(typeof newvalue === 'string') {
    newvalue.toUpperCase();
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
        
    }
    console.log("Error", error);
    
    
}





const data: unknown = "chai pr code"
const strData: string = data as string // forcefully asserted

// never data type

type Role = 'admin' | 'user' | 'superadmun'

function redirect(role: Role): void {
    if(role === 'admin'){
        console.log("Redirecting to admin");
        return
    }
    if(role === 'user'){
        console.log('Redirecting ti user');
        return
    }
    role;  // Never Data type
}


function never(): never{
    while(true){}
}