let response: any = "42";

let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);
