Q1 : What are some differences between interfaces and types in TypeScript?
Ans : 
i) interface can extends uing extends keyword and type use & to extend
interface A{
  name : string;
  age : number;
}
interface B extends A {
  class : number;
}

type A = {
  name : string;
  age : number;
}
type B =  {
  class : number;
}
type AB = A & B;

ii) interface can merge but type can not do merge
interface A {
  class : number;
}
interface A{
  name : string;
  age : number;
}


Q3 : Explain the difference between any, unknown, and never types in TypeScript?
Ans : 
any can assign anything it means it stops turn of type checking , 
unknown means the type is unknown and  we can assign anything without checking type first but when we use this type we can check type 
and never means impossible value that never occur(a function that never return anything).

ex: any
let x: any = 10;
x = 'Mehedi'

ex: unknown
let x: unknown = 'Mehedi';
if(typeof x==='string'){
  x.toUpperCase();
}

ex: never
function throwError(msg : string) : never{
  throw new Error(msg);
}














