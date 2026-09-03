// let subs = 10;
let subs: number | string = "1M"


let apiRequestStatus: "pending" | 'success' | 'error' = 'pending'

// apiRequestStatus = "success"

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'aisle'


const orders = ['12', '20', '28', '42']

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}

console.log(currentOrder);

// Union types in TS...

let id: string | number;

id = 101;
id = "USER101";

let result: number | "N/A"; // "Declared the type N/A in place of any


result = 95;
result = "N/A";


// Any types in ts

let data: any = "Hello";

data = 100;
data = true;
data = {}
data = "Klaus"
data = []


// Practice Questions




// Level 1 — Basic Types
/*Q1 Create variables for: your name , your age
whether you are a student
your percentage
*/

let myName: string = "Klaus";
let myAge: number = 21;
let isStudent: boolean = true;
let percentage: number = 79;


//Q2:- What's wrong with this code?

// let age: number = 21; 

// age = "21";

// Corrected code
let age: number | string = 21; 

age = "21";


// Q3: - Create an array that can contain only numbers.
// Then create an array that can contain only strings.


let numsArr: number[] = [1, 3, 5, 7];
let strArr: string[] = ["Alex", "Kimi", "Lewis"];