const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger",
    price: 24,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingri: string[]
}

const adeak: Tea = {
    name: "Adrak Cahi",
    price: 234,
    ingri: ["ginger", "lemon"]
}

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" }

let bigCup = { size: "400ml", material: "steel" }

smallCup = bigCup


type Brew = { brewTime: number }
const coffee = { brewTime: 4, beans: "arabica" }
const chaiVrev: Brew = coffee


type User = {
    username: string;
    password: string
}

const u: User = {
    username: "chaicode",
    password: "1234"
}

type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }

type Order = {
    id: string;
    items: Item[];
    address: Address
}


type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

// const updatedChai = (updates: Partial<Chai>){
//     console.log("updatig cahi", updates);

// }

// updatedChai({ price: 25 })


type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);

}

placeOrder({
    name: "masala Chai",
    quantity: 2
})

type chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingrid: string[]
}


type BasicChaiInfo = Pick<Chai, "name" | "price">


const chaiInfo: BasicChaiInfo = {
    name: "Lemon tea",
    price: 230
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngrid: string;
}

type PublicChai = Omit<Chai, "secretIngrid">