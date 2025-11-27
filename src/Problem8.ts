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