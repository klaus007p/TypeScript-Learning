type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}


function makeChai(order: chaiOrder) {
    console.log(order);
    
}

function serveChai(order: chaiOrder) {
    console.log(order);
    
}


type TeaRes = {
    water: number;
    milk: number
}

// class MasalaChai implements TeaRes{
//     water = 100;
//     milk = 50;
// }


interface CupSize {
    size:  "small" | "large"
}

class Chai implements CupSize {
    size: "small" | "large" = "large"
}

// We use interfaces in class objects



// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean = true; 
// }


type TeaType = 'masala' | "ginger" | "lemon" // Example of literal types

function orderChai(t: TeaType){
    console.log(t);
    
}


// Intersection ex

type Base = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = Base & Extra


const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}


type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Hitesh"}
const u2: User = {username: "Hitesh", bio: "hitesh.ai"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Master",
    version: 1
}

// cfg.appName = "Chai"  // Cannot assign multiple