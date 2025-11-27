type valueType = string | number | boolean;
const formatValue = (value : valueType) : valueType => {
    if(typeof value==='string'){
        return value.toUpperCase();
    }
    else if(typeof value==='number'){
        return value*10;
    }
    else if(typeof value==='boolean'){
        return false;
    }
    else{
        return true;
    }
}


const getLength = (arr : string|number[]): number => {

    let len = 0;
    if(typeof arr==='string'){
        len =  arr.length;
    }
    else if(Array.isArray(arr)){
        len =  arr.length;
    }
    return len;
}


class Person {
    name : string;
    age : number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);


interface itemType{
    title : string;
    rating : number;
}
const filterByRating = (items: itemType[]): itemType[] => {
    let result = items.filter( item => item.rating>=4);
    return result;
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];


interface userType {
    id : number;
    name : string;
    email : string;
    isActive : boolean;
}
const filterActiveUsers = (users : userType[]): userType[] => {
    let result = users.filter(user => user.isActive===true);
    return result;
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (myBook : Book): void => {
    console.log(`Title: ${myBook.title}, Author: ${myBook.author}, 
        Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable}`);
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
printBookDetails(myBook);


const getUniqueValues = <T extends number | string>(arr1: T[], arr2: T[]): T[] => {
    const result = [...new Set([...arr1, ...arr2])];
    return result;
}


interface productType {
    name : string;
    price : number;
    quantity : number;
    discount ?: number;
}
const calculateTotalPrice = (products: productType[]): number => {
    const totalPrice = products.reduce( (total, item) => {
        let originalPrice = item.price*item.quantity;
        let discountPrice = 0;
        if(item.discount !== undefined){
            discountPrice = originalPrice*item.discount/100;
        }
        console.log(`Name : ${item.name} original : ${originalPrice} discount : ${discountPrice}`);
        return total + originalPrice - discountPrice;
    }, 0);

    return totalPrice;
}
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];