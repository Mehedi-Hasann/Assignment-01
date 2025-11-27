//! Problem 1
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
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));


//! Problem 2
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
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));


//! Problem 3
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
console.log(person1.getDetails());
const person2 = new Person('Alice', 25);
console.log(person2.getDetails());


//! Problem 4
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
console.log(filterByRating(books));


//! Problem 5
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
console.log(filterActiveUsers(users));


//! Problem 6
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


//! Problem 7
const getUniqueValues = <T extends number | string>(arr1: T[], arr2: T[]): T[] => {
    const result = [...new Set([...arr1, ...arr2])];
    return result;
}
const array1  = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));


//! Problem 8
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
console.log(calculateTotalPrice(products));