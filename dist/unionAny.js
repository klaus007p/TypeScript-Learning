"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let subs = 10;
let subs = "1M";
let apiRequestStatus = 'pending';
// apiRequestStatus = "success"
let airlineSeat = 'aisle';
airlineSeat = 'aisle';
const orders = ['12', '20', '28', '42'];
let currentOrder;
for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}
console.log(currentOrder);
// Union types in TS...
let id;
id = 101;
id = "USER101";
let result; // "Declared the type N/A in place of any
result = 95;
result = "N/A";
// Any types in ts
let data = "Hello";
data = 100;
data = true;
data = {};
data = "Klaus";
data = [];
// Level 1 — Basic Types
/*Q1 Create variables for: your name , your age
whether you are a student
your percentage
*/
//# sourceMappingURL=unionAny.js.map