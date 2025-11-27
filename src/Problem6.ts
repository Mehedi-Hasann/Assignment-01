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