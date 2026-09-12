function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`);
    
}

makeChai("Masala", 2)


function getChai(): number {
    return 234
}

function makeOrder(order?: string){
    if(!order) return null
    return order
}

function logchai(): void {
    console.log("Chai is ready");
    
}


// function orderChau(type?: string) {

// }

function orderChau(type: string = "Masala") {

}


function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}) : number{
    return 4;
    
}