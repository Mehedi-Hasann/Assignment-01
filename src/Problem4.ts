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